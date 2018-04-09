
$(document).ready(function () {
    $(".modal").modal();
    $("#form1").submit(onSearchPlayerClick);

    //Top teams
    AJAX.topTeams(function (response) {
        response.forEach(function(e, i) {
            let row = $(`
                <tr>
                    <td>#${i+1}</td>
                    <td>${e.Team_preffered_name}</td>
                    <td>${e.arrest_count}</td>
                </tr>
            `);
            $("#top-teams > tbody").append(row);
        })
    })

    //Top players
    AJAX.topPlayers(function (response) {
        response.forEach(function(e, i) {
            let row = $(`
                <tr>
                    <td>#${i+1}</td>
                    <td>${e.Name}</td>
                    <td>${e.Team_city} ${e.Team_name}</td>
                    <td>${e.arrest_count}</td>
                </tr>
            `);

            row.click(function(){
                window.location.href = "details.html?name="+encodeURIComponent(e.Name);
            })
            
            $("#top-players > tbody").append(row);
        });
    });

});

