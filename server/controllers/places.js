var Place       = require('../models/place');

exports.addPlace = function(req, res){
    res.json('add place');
}

exports.updatePlace = function(req, res){
    res.json('update place');
}

exports.getPlaces = function(req,res){
    Place.find({}, function(err, result){
        res.json(result);
    })
}

exports.getPlace = function(req, res){

    Place.findOne({_id : req.params.id}, function(err, result){
        res.json(result);
    })

}
