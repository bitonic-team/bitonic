var Place  = require('../models/place');


exports.addDonation = function(req, res){

    var params = req.body;

    var amount     = params.amount,
        name       = params.name,
        placeId    = params.placeId;


    console.log(req.body)


    Place.findByIdAndUpdate(placeId,{$push : {"donators" : { name : name, amount : amount}}},{upsert:true} ,function(err){

        if(err){ 
           console.log(err) 
         } else { 
            console.log('Added')
            res.json('ok')
         }

    });

}