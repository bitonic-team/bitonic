module.exports = function(app){
    var places = require('../controllers/places');
    app.get('/places', places.getPlaces);
    app.get('/places/:id', places.getPlace)
};
