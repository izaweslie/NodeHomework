console.log("this is loaded");

//get keys for twitter api
var Twitter = require('twitter');
	//console.log(Twitter);
//get keys for google api
var request = require('request');
	//console.log(request);
//get keys for spotify api
var Spotify = require('node-spotify-api')
	//console.log(Spotify);
//fs aka file system will write the text file / package
var fs = require('fs');
	//console.log(fs);
var omdb = require("request");

//spotify
var spotifyKeys = new Spotify ({
  id: '49db648071cb44efaacc7251c929ec19',
  secret: 'da356ba271024b46a0abd5cd94a3954c'
});

//twitter
var twitterKeys = new Twitter({
 	consumer_key: '8kZHAf32steq5gYdSLLodz2aq',
  	consumer_secret: "UtXA0xZp3Ig6sjpywycsKsETCV7QSeakKeeDaxCyZ5cN5c1Yvf",
  	access_token_key: '925535735058518016-FE64MN4WWdMsySk4e76tI8Cu55AiSMB',
  	access_token_secret: 'rfL1XrU83iPKITZwIVnavXtgShHrq3NjnQdchOwy1J5iH'
});

//google
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

module.exports = {
	twitterKeys: twitterKeys, 
	spotifyKeys: spotifyKeys
};