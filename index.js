


var navLinks = document.getElementById("navLinks");
var myNav = document.getElementById("myNav");
function openMenu() {
    console.log('menu open')
    navLinks.style.right = "0";
}

function closeMenu() {
    console.log('menu close')
    navLinks.style.right = "-100vw";
}

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        navLinks.classList.add("nav-links-colored")
    }
    else {
        myNav.classList.remove("nav-colored");
        navLinks.classList.remove("nav-links-colored")
    }
};