$(document).ready(function () {

// NFL Crime AJAX

    //Search individual player (name):
     var searchPlayer = function (player) {
        var queryURL = "http://NflArrest.com/api/v1/player/search/?term=" + player;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });

    };

    searchPlayer();

    //Search team info (team must be searched with Team ID (ex: seahawks = SEA)): 
    var topTeams = function () {
        var queryURL = "http://NflArrest.com/api/v1/team/";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;

            for (i=0; i< results.length; i++) {
                var tRow = $("<tr>");
                var tName = $("<td>").text(results[i].Team_preffered_name);
            }
        });
    };

    topTeams();

    // News API AJAX

    var searchNews = function (input) {
        var queryURL = "https://newsapi.org/v2/everything?" + $.param({
            q: input + " arrest nfl",
            apiKey: "003b6f29d903402b870e130d1757f4ef"
        });

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    };

    searchNews("");

    // loads up to 10 images. hides #load button if no more to load.
    function loadImages(query, offset) {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?" + $.param({
                api_key: key, 
                q : query, 
                limit: limit,
                offset: offset
            }),
            method: "GET"
        }).then(function(response) {
            console.log(response);

            // save response object, for pagination
        });
    };

AJAX.searchNews("", x => console.log(x));

});
