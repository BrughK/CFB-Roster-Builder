const APIKey = 'Ztn0VfU0cfZ0GaF/wDYhPTgQqXOvGa6mEb1ht26W0RyYW3aIg9BppDJW/ZC4KMza';
// set up your own API key on https://collegefootballdata.com/key

// npm i cfb.js
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = `Bearer ${APIKey}`;

// this is just one example of a roster call
// for all calls see https://www.npmjs.com/package/cfb.js
var api = new cfb.TeamsApi()
var opts = { 
  //'gameId': 56, // {Number} Game id filter
  'year': 2022, // {Number} Year/season filter for games
  //'week': 56, // {Number} Week filter
  //'seasonType': "regular", // {String} Season type filter (regular or postseason)
  'team': "Georgia", // {String} Team
  //'home': "home_example", // {String} Home team filter
  //'away': "away_example", // {String} Away team filter
  //'conference': "conference_example" // {String} Conference abbreviation filter
};


api.getRoster(opts).then(function(data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function(error) {
    console.error(error);
  });
  