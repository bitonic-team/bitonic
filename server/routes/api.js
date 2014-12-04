module.exports = function(app){
    var places = require('../controllers/places');
    app.get('/api/places', places.getPlaces);
};
