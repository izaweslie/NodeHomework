console.log("i am working!")

var keys = require("./keys.js");


var userCommand = process.argv[2];
var userInput = process.argv[3];

function twitter(){
  var showTweets = keys.twitterKeys;
  //console.log(showTweets);
  var params = {
    screen_name: 'JaneHo47400548'
  } && {
    count: 20
  };
  showTweets.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error){
      for (var i = 0; i < tweets.length; i++) {
        console.log('Tweet' + tweets[i].text + '\n' + 'Created at: ' + tweets[i].created_at);
      }
          //console.log(tweets);
    }  
  });
}

//spotify 'spotify-this-song'
var spotifyThis = keys.spotifyKeys;
console.log(spotifyThis);

function spotify() {
    if (userInput != null){
        spotifyThis.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        //console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].artists[0].name, data.tracks.items[0].album.name, data.tracks.items[0].uri);
      });
    } else {
      console.log("please enter a song name");
    }
}

if (userCommand === 'spotify-this-song'){
  spotify();
}
else if (userCommand === 'my-tweets'){
  twitter();
}
else if (userCommand === 'do-what-it-says'){
  doWhatItSays();
}


function doWhatItSays(){
    fs.readFile("random.txt", "UTF-8", function(error, data){
        if (error){
            console.log(error);
        }
            console.log(data);
    });
}

function omdb(){

};

