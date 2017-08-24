var express = require('express');
var path = require('path');
var app = express();

const PUBLIC_ASSETS = '/public';

const request = require('request');

const options = {
  url: 'http://localhost:3001/api/chapters',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
  }
};


app.set('port', process.env.PORT || 3001);


app.get('/', function(req, res) {
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

  res.json(chapterListing);
});

app.all('*', function(req, res) {
  res.redirect("http://localhost:" + app.get('port') + "/");
});

app.listen(app.get('port'), function() {
  console.log("The Chapter API served from NodeJS and ExpressJS is running on port " + app.get('port') + "...");
});

module.exports = app;


