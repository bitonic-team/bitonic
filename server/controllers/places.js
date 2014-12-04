var Place       = require('../models/place');

exports.getPlaces = function(req,res){
    res.json({"name" : "Davo"});
    // fetch places in db
}

exports.getPlace = function(req, res){
    console.log(req.params.id);
}