// test/locu-api.js
var https = require('https');
var options = {
  host : 'api.locu.com',
  port : 443,
  method : 'POST',
  path : '/v2/venue/search'
};
var location = require('../models/location.js');
location.locality = 'Denver';
location.postal_code = '80205';

console.log(location);

var query = {
"api_key" : "e7dd380ada744266558c5a256628aea1a6edcb0d",
"venue_queries": [
{
"location" : location 
}
],
"menu_item_queries" : [
    {
      "name" : "tea"
    }
  ]
};

var queryString = JSON.stringify(query);
var headers = {
  'Content-Type': 'application/json',
  'Content-Length': queryString.length
};

var reqPost = https.request(options, function(res) {
  res.on('data', function(d) {
        process.stdout.write(d);
    });
 
});
reqPost.write(queryString); 
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});
