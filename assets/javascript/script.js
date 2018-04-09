function onSearchPlayerClick(event) {
    console.log("click");
    event.preventDefault();
    let term = $("input[type=text]", "#search-players").val();
    console.log(term);

    AJAX.searchPlayer(term, function(response) {
        $("#num").html(response.length);

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

$(document).on("click", "#search-players button", onSearchPlayerClick);

$(document).ready(function() {
    $(".modal").modal();
})