var express = require('express')
var app = express()
var mongoose   = require('mongoose');

var configDB  = require('./server/config/database.js');
var port       = process.env.PORT || 80;

// CONNECT TO DB
mongoose.connect(configDB.url);

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.redirect("/public/index.html");
});

// API ROUTE
require('./server/routes/api')(app);


app.listen(port, function () {
    console.log('app running port'+ port);
})