const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./reviews.js');
const { ref } = require('joi');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        url:String,
        filename:String,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    lat:Number,
    lng:Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category:{
        type:String,
        enum:["Mountain","Island","Greenery","Snow","Desert","Beach","Urban"],
        default:"Global",
    },
});

listingSchema.post("findOneAndDelete",async (listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;