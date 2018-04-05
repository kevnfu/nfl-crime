$(document).ready(function () {

    // NFL Crime AJAX
    
    $("button").on("click", function () {
        var team = $(this).attr("data-name");
        var position = $(this).attr("data-name");
    });

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

});
