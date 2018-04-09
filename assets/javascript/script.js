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
    AJAX.searchNews("", function (response) {
        console.log(response);
        for (i = 0; i < 9; i++) {
            var articleNumber = ("#" + (i + 1));

            var $articleWell = $("<article>");
            $articleWell.addClass("well");
            $articleWell.attr("id", "article-well" + articleNumber);

            $("#well-section").append($articleWell);

            var articleTitle = (response.articles[i].title);
            $articleWell.append(
                "<h3 class='articleHeadline'>" +
                "<span class='label label-primary'>" + articleNumber + " </span>" +
                "<strong>" + articleTitle + "</strong></h3>"
            );

            var articleAuthor = (response.articles[i].author);
            if (articleAuthor != "null") {
                $articleWell.append(
                    "<h4 class='articleAuthor'>" +
                    "By: " +
                    articleAuthor + "</h4>"
                );
            };

            var articleDate = (response.articles[i].publishedAt);
            $articleWell.append(
                "<h5 class='articleDate'>" +
                articleDate + "</h5>"
            );

            var articleDescription = (response.articles[i].description);
            $articleWell.append(
                "<p class='articleDescription'>" +
                articleDescription + "</p>"
            );

            var articleUrl = (response.articles[i].url);
            $articleWell.append(
                "<a href= '" + articleUrl + "'>" + "Click here to read more." +
                "</a>"
            )
        };
    });

    // GIPHY Api: Loads up to 10 images. hides #load button if no more to load.
    AJAX.searchGif("", function (response) {
        console.log(response);
    });

});














