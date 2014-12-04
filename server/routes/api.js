module.exports = function(app){
    var places = require('../controllers/places');
    app.get('/api/places', places.getPlaces);
    app.get('/api/places/:id', places.getPlace)
};
