/*eslint-env browser*/

/* https://erweb.ru/web-development/back-to-top-button-vanilla-js */
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

function trackScroll() {
    var scrolled = window.pageYOffset;
    /* var coords = document.documentElement.clientHeight; */
    var coords = document.documentElement.clientHeight/300;

    if (scrolled > coords) {
        goTopBtn.classList.add('go-top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('go-top-show');
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', topFunction);
