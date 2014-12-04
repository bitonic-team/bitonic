var mongoose = require('mongoose');


var placeSchema = mongoose.Schema({
    name: String,
    type : String,
    lat: Number, 
    lng: Number,
});


module.exports = mongoose.model('Place', placeSchema, 'Places');