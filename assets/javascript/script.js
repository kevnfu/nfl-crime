function onSearchPlayerClick(event) {
    console.log("click");
    event.preventDefault();
    let term = $("#search").val();
    console.log(term);

    AJAX.searchPlayer(term, function(response) {
        $("#num").html(response.length);
        $("#search-table").html("");

        response.forEach(e => {
            let elem = $(`
                <tr>
                    <td><a href="details.html?name=${encodeURIComponent(e.Name)}">${e.Name}</a></td>
                    <td>${e.arrest_count}</td>
                </tr>
            `);

            $("#search-table").append(elem);
        });

        $("#search-modal").modal("open");
    })
}

// $(document).on("click", "#search-players button", onSearchPlayerClick);

$(document).ready(function () {
    $(".modal").modal();
    $("#form1").submit(onSearchPlayerClick);

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

});

