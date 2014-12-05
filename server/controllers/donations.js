exports.addDonation = function(req, res){

    var params = req.body;

    var amount     = params.amount,
        firstnName = params.firstName,
        lastName   = params.lastName,
        place      = params.place,
        preferences = params.preferences,
        pictureUrl = params.pictureUrl;


        console.log(req.body);
}