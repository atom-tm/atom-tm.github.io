/*eslint-env browser*/

/* https://erweb.ru/web-development/back-to-top-button-vanilla-js */
/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

var goTopBtn = null;
function trackScroll()
{
  if (!goTopBtn) {
    goTopBtn = document.querySelector('.go-top');
  }
  if (!goTopBtn) return;

  var scrolled = window.pageYOffset;
  /* var coords = document.documentElement.clientHeight; */
  var coords = document.documentElement.clientHeight / 300;

  if (scrolled > coords) {
    goTopBtn.classList.add('go-top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('go-top-show');
  }
}

function topFunction()
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var mybtn = null;
function scrollFunction()
{
  if (!mybtn) {
    mybtn = document.getElementById('myBtn');
  }
  if (!mybtn) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = 'block';
  } else {
    mybtn.style.display = 'none';
  }
}

window.onload = function()
{
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = scrollFunction;

  // When the user clicks on the button, scroll to the top of the document
  goTopBtn = document.querySelector('.go-top');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', topFunction);
}
