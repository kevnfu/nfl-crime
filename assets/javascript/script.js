$(document).ready(function () {

    //Top teams
    AJAX.topTeams(function (response) {
        console.log(response);
        for (i = 0; i < response.length; i++) {
            var tPlace = ("#" + (i + 1));
            var tName = (response[i].Team_preffered_name);
            var tCount = (response[i].arrest_count);

            $("#top-teams > tbody").append(
                "<tr><td>" +
                tPlace +
                "</td><td>" +
                tName +
                "</td><td>" +
                tCount +
                "</td></tr>"
            );
        };
    })

    //Top players
    AJAX.topPlayers(function (response) {
        console.log("top players");
        console.log(response);
        for (i = 0; i < response.length; i++) {
            var tPlace = ("#" + (i + 1));
            var tName = (response[i].Name);
            var tTeamName = (response[i].Team_city + " " + response[i].Team_name);
            var tCount = (response[i].arrest_count);

            $("#top-players > tbody").append(
                "<tr><td>" +
                tPlace +
                "</td><td>" +
                tName +
                "</td><td>" +
                tTeamName +
                "</td><td>" +
                tCount +
                "</td></tr>"
            );
        };
    });
    
    // News API AJAX 
    AJAX.searchNews("", x => console.log(x));

    // GIPHY Api: Loads up to 10 images. hides #load button if no more to load.
    AJAX.searchGif("", function (response) {
        console.log(response);
    });

});














