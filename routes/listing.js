const express = require('express');
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const { listingSchema } = require("../utils/schema.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");

const multer = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listing.js");

// Validation middleware
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        return next(new expressError(400, errMsg));
    }
    next();
};

router.route("/")
    .get(wrapAsync(listingController.index))  //index
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));                          //create listing


// New listing form
router.get("/new", isLoggedIn, listingController.renderNewForm);

// 🔍 Filter listings by category
router.get("/filter/:type", wrapAsync(listingController.filterListing));

router.get("/search",listingController.searchListing);


router.route("/:id")
    .get(wrapAsync(listingController.showListing))                        //show
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))  //update
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));            //delete



// Edit form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editForm));


module.exports = router;
