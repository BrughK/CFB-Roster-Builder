// set up your own API key on https://collegefootballdata.com/key

// must include require('dotenv').config();
// in an index.js file


const apiKey = process.env.API_KEY;
const fs = require('fs');
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;
require('dotenv').config();


// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = process.env.API_KEY;

var api = new cfb.TeamsApi()

module.exports = { getRoster: 
async function getRoster (a, b){
  
  let opts = {
    'team' : `${a}`,
    'year' : `${b}`,
  };


  let dataString;
  await api.getRoster(opts).then(function(data){
    dataString = JSON.stringify(data);
      if(data.length === 0){
        console.log('Roster not found!')
        return;
      }

  }, function(error){
      console.error(error);
  });
  return dataString;
}
}
  