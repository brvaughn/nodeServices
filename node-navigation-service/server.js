var express = require('express');
var path = require('path');
var app = express();

const PUBLIC_ASSETS = '/public';

// const request = require('request');

app.set('port', process.env.PORT || 3002);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + PUBLIC_ASSETS + '/index.html'));
});

app.get('/api/navigation', function(req, res) {

  const navigationListing = [
    { content :'Annual Meetings', isSearch : false },
    { content :'Student Keynotes', isSearch : false },
    { content :'Buffett on CNBC', isSearch : false },
    { content :'Buffettisms', isSearch : false },
    { content :'About', isSearch : false },
    { content :'Search', isSearch : true }
    ];

  res.json(navigationListing);
});

app.all('*', function(req, res) {
  res.redirect("http://localhost:" + app.get('port') + "/");
});

app.listen(app.get('port'), function() {
  console.log("The Navigation API served from NodeJS and ExpressJS is running on port " + app.get('port') + "...");
});

module.exports = app;


