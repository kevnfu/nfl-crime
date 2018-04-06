window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "slidingSubmenus": false,
     "extensions": [
        "fx-menu-zoom",
        "pagedim-black",
        "position-right"
     ]
  });
});