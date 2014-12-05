var Place  = require('../models/place');


exports.addDonation = function(req, res){

    var params = req.body;

    var amount     = params.amount,
        firstName = params.firstName,
        lastName   = params.lastName,
        placeId      = params.placeId,
        preferences = params.preferences,
        pictureUrl = params.pictureUrl;


    Place.findByIdAndUpdate({_id : placeId},{$push : {"donators" : { name : firstName}}} ,function(err){
        console.log(err);
    });

}