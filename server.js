var express = require('express')
var app = express()
var mongoose   = require('mongoose');

var configDB  = require('./server/config/database.js');
var port       = process.env.PORT || 80;

var apiRoute = require('./server/routes/api')(app);

// CONNECT TO DB
mongoose.connect(configDB.url);

app.use(express.static(__dirname + '/public'));
app.use('/api', apiRoute);

app.get('/*', function (req, res) {
  res.redirect("/public/index.html");
});

app.listen(port, function () {
    console.log('app running port'+ port);
})