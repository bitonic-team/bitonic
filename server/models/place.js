var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
    name: String,
    lat: Number, 
    lng: Number,
    organizations : [],
    donators : [
    {
        name : String,
        amount : Number
    }
    ]
});

module.exports = mongoose.model('Place', placeSchema, 'Places');
