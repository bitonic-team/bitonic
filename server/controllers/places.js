var Place       = require('../models/place');

exports.getPlaces = function(req,res){
    // fetch places in db
    Place.find({}, function(err, result){
        console.log(result);
        res.json(result);
    })
}

exports.getPlace = function(req, res){
    console.log(req.params.id);
}