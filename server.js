var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.redirect("/public/index.html");
});

require('./server/routes/api')(app);

app.listen(80, function () {
    console.log('app running port 80');
})