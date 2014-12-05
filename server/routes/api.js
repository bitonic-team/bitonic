module.exports = function(app){
    var places = require('../controllers/places');
    var donations = require('../controllers/donations');

    app.get('/api/places', places.getPlaces);
    app.get('/api/places/:id', places.getPlace);

    app.post('/api/donate', donations.addDonation)
};
