const Listing = require("../models/listing.js");
const geocoder = require("../utils/geocoder.js")

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings, activeFilter: null, searchQuery: null });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const info = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }   // <--- nested populate for author
        })
        .populate("owner");

    if (!info) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { info });
}

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    const geoData = await geocoder.geocode(req.body.listing.location);
    if (geoData.length) {
        newListing.lat = geoData[0].latitude;
        newListing.lng = geoData[0].longitude;
    } else {
        req.flash("error", "Location not found. Please enter a valid address.");
        return res.redirect("/listings/new");
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}

module.exports.editForm = async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    if (!list) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    let originalImageUrl = list.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250")

    res.render("listings/edit.ejs", { list, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const updated = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });

    if (typeof req.file !== "undefined") {
        const url = req.file.path;
        const filename = req.file.filename;
        updated.image = { url, filename };
        await updated.save();
    }

    if (!updated) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const deleted = await Listing.findByIdAndDelete(id);
    if (!deleted) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}

module.exports.filterListing = async (req, res) => {
    const { type } = req.params;
    const validTypes = ["Mountain", "Island", "Greenery", "Snow", "Desert", "Beach", "Urban"];
    let query = {};

    if (validTypes.includes(type)) {
        query.category = type;  // Make sure your Listing model has a 'category' field
    }

    const allListings = await Listing.find(query);
    res.render("listings/index", { allListings, activeFilter: type });
};

module.exports.searchListing = async (req, res) => {
    const searchTerm = req.query.q; // get search query

    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { location: { $regex: searchTerm, $options: "i" } },
                { country: { $regex: searchTerm, $options: "i" } }
            ]
        };
    }

    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { allListings, searchQuery: searchTerm,activeFilter: "All" });
};