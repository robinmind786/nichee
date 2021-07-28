const navLinks = document.querySelector('.nav-links')
const openNav = document.querySelector('.topnav .burger');
const closeNav = document.querySelector('.topnav .fa-remove');

openNav.addEventListener('click', function(){
  navLinks.style.left = '0';
});

closeNav.addEventListener('click', function(){
  navLinks.style.left = '-100%';
});


const hasCollapsible = document.querySelectorAll(".has-collapsible");

hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});



// window.onscroll = function() {scrollFunction()};
// var navbar = document.getElementById('myTopnav');


// var sticky = navbar.offsetTop;

// function scrollFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }