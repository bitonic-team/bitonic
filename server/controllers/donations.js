var Place  = require('../models/place');


exports.addDonation = function(req, res){

    var params = req.body;

    var amount     = params.amount,
        name       = params.name,
        placeId    = params.placeId;


    console.log(req.body)


    Place.findByIdAndUpdate({_id : placeId},{$push : {"donators" : { name : name, amount : amount}}} ,function(err){
        console.log(err);
    });

}