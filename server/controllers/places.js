var Place       = require('../models/place');

exports.getPlaces = function(req,res){
    Place.find({}, function(err, result){
        console.log(result);
        res.json(result);
    })
}

exports.getPlace = function(req, res){

    Place.findOne({_id : req.params.id}, function(err, result){
        res.json(result);
    })

}
