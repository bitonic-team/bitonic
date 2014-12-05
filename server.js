var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')

var configDB  = require('./server/config/database.js');
var port       = process.env.PORT || 80;

// CONNECT TO DB
mongoose.connect(configDB.url);

app.use(cors());
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

require('./server/routes/api')(app);

app.get('/*', function (req, res) {
  res.sendfile(__dirname+"/public/index.html");
});

app.listen(port, function () {
    console.log('app running port'+ port);
})