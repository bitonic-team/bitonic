module.exports = function(app){
    var places = require('../controllers/places');
    var donations = require('../controllers/donations');

    // PLACES
    app.post('/api/places', places.addPlace)
    app.get('/api/places', places.getPlaces);
    app.get('/api/places/:id', places.getPlace);
    app.put('/api/places/:id', places.updatePlace);

    // DONATIONS
    app.post('/api/donate', donations.addDonation);
};
