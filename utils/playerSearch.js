const APIKey = 'Ztn0VfU0cfZ0GaF/wDYhPTgQqXOvGa6mEb1ht26W0RyYW3aIg9BppDJW/ZC4KMza';


const fs = require('fs');
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;


// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = `Bearer ${ APIKey }`;

var apiInstance = new cfb.PlayersApi();

module.exports = { getPlayer:
 async function getPlayer(a, b, c, d){
    var name = `${a}`; // String | Term to search on
    var opts = { 
    'position': `${b}`, // String | Position abbreviation filter
    'team': `${c}`, // String | Team filter
    'year': `${d}` // Not used and handed an empty string
    };


    let dataString;
    await apiInstance.playerSearch(name, opts).then(function(data) {
        dataString = JSON.stringify(data);
            if(data.length === 0){
                console.log('Player not found!')
                return;
            }
    }, function(error) {
        console.error(error);
    });
    return dataString;
  }
}


/*if we want to write the file
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
*/