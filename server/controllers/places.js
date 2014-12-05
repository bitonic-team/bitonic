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


/*

{"name": "Liberia",
"lat" : "6.2957388",
"lng" : "-10.7696085",
"details" : "Conflit armé dans la capitale du Liberia, des populations civiles sont prises à parti",
"organizations" : ["Croix Rouge française", "Action contre la faim", "Amnesty International"]}

{"name": "Syrie",
"lat" : "34.8805266",
"lng" : "38.9098835",
"details" : "Répression du régime en place contre les populations révoltées",
"organizations" : ["Amnesty International", "ADRA"]}

{"name": "Soudan",
"lat" : "15.7860696",
"lng" : "30.1995791",
"details" : "Sécheresse extrême qui prive d'eau 50% de la population",
"organizations" : ["Action contre la faim", "Croix rouge française", "SOS Village d'enfants"]}

{"name": "Nigeria",
"lat" : "6.3475752",
"lng" : "5.6424665",
"details" : "Grave épidémie d'Ebola",
"organizations" : ["Action contre la faim", "Croix rouge française", "Médecins sans frontières"]} */