var express = require('express');
var path = require('path');
var app = express();

const PUBLIC_ASSETS = '/public';

// const request = require('request');

app.set('port', process.env.PORT || 3001);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Reqested-Width, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  console.log("A non-API call was received and handled.");
  res.sendFile(path.join(__dirname + PUBLIC_ASSETS + '/index.html'));
});

app.get('/api/chapters', function(req, res) {

  const chapterListing = [
    { title : 'Coca-Cola', marker : '10'},
    { title : 'Apple', marker : '20'},
    { title : 'Retirement', marker : '30'},
    { title : 'Forbes', marker : '40'},
    { title : 'Berkshire Hathaway', marker : '50'},
    { title : 'Investment Strategy', marker : '60'},
    { title : 'Amazon', marker : '70'},
    { title : 'Stocks', marker : '80'},
    { title : 'Millionaires', marker : '90'},
    { title : 'Wall Street', marker : '100'},
    { title : 'Dream Big', marker : '110'},
    { title : 'Index Fund', marker : '120'}
    ];

  console.log('An API call for the chapters was received and handled.');

  setTimeout(function() {
    res.json(chapterListing);
  }, 3000);


});

app.all('*', function(req, res) {
  res.redirect("http://localhost:" + app.get('port') + "/");
});

app.listen(app.get('port'), function() {
  console.log("The Chapter API served from NodeJS and ExpressJS is running on port " + app.get('port') + "...");
});

module.exports = app;


