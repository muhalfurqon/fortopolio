// created by : RENOLD ALVAN FUADY
// created on : 25-01-2022
// NIM        : 10121244 IF-7
// copyright RAF 

// Navbar
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
});
// End Navbar

