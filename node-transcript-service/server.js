var express = require('express');
var path = require('path');
var app = express();

const PUBLIC_ASSETS = '/public';

// const request = require('request');

app.set('port', process.env.PORT || 3003);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + PUBLIC_ASSETS + '/index.html'));
});

app.get('/api/transcripts', function(req, res) {

  const transcriptListing = [
    { marker : '10', id : '', content : "The investment has served Buffett and Berkshire's shareholders well. Of the Coca-Cola stake's market value, more than $15.4 billion represents profit. The $560 million in dividends it will receive this year from Coca-Cola represents nearly half of what Buffett paid for the shares in the first place. Here's why Buffett likes Coca-Cola so much, and whether you should consider joining him in the investment."},
    { marker : '20', id : '', content : "Berkshire Hathaway chief Warren Buffett said Monday he doesn't personally own an iPhone but he more than doubled his holdings in Apple in January."},
    { marker : '30', id : '', content : "He added that investors can keep more of their retirement savings by cutting investment costs, by reducing management fees or commissions charged by financial advisors."},
    { marker : '40', id : '', content : "CNBC’s David Faber reports on Paul Singer’s hedge fund, Elliott Management, hiring Moelis to raise capital for its $9.3 billion bid on Oncor. The bid from Singer puts his hedge fund in competition with Warren Buffett for Oncor."},
    { marker : '50', id : '', content : "Shares of NRG Energy surged after the company announced a transformation plan backed by Paul Singer's Elliott Management."},
    { marker : '60', id : '', content : "The move ends a search Home Capital started in March after it terminated the employment of former CEO Martin Reid."},
    { marker : '70', id : '', content : "Bissada must also navigate the business through regulatory changes, which could make it harder for sub-prime lenders such as Home Capital to do business in Canada. Regulators have turned their focus on risky lending amid fears of housing bubbles in the cities of Toronto and Vancouver and are proposing tougher rules on some mortgages."},
    { marker : '80', id : '', content : "The fifty-seven year old is currently the chief executive of Kanetix Ltd, a provider of digital services to the insurance market. He has also been chairman of two mortgage lenders, Canadiana Financial Corp and Paradigm Quest Inc."},
    { marker : '90', id : '', content : "The withdrawals accelerated after April 19, when Canada's biggest securities regulator, the Ontario Securities Commission, accused Home Capital of making misleading statements to investors about its mortgage underwriting business."},
    { marker : '100', id : '', content : "Husnick said the Berkshire proposal has already been discussed with PUC staff. He said Energy Future anticipates quick regulatory approval and then confirmation of the plan by the bankruptcy court, an approach that Judge Christopher Sontchi said he supported."},
    { marker : '110', id : '', content : "Husnick said the Berkshire proposal has already been discussed with PUC staff. He said Energy Future anticipates quick regulatory approval and then confirmation of the plan by the bankruptcy court, an approach that Judge Christopher Sontchi said he supported."},
    ];

  res.json(transcriptListing);
});

app.all('*', function(req, res) {
  res.redirect("http://localhost:" + app.get('port') + "/");
});

app.listen(app.get('port'), function() {
  console.log("The Transcript API served from NodeJS and ExpressJS is running on port " + app.get('port') + "...");
});

module.exports = app;


