$(document).ready(function () {

// NFL Crime AJAX

$("button").on("click", function () {
    var team = $(this).attr("data-name");
    var position = $(this).attr("data-name");
});

AJAX.searchNews("", x => console.log(x));

});
