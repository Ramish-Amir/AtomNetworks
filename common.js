
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

function searchOffer() {
    var searchString = ((document.getElementById('searchInput')).value).toUpperCase();
    var offers = document.getElementsByClassName('card');
    for (let i = 0; i < offers.length; i++) {
        if (!(offers[i].childNodes[1].innerText.toUpperCase()).includes(searchString)) {
            offers[i].style.display = "none"
        } else {
            offers[i].style.display = "block"
        }

    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function sendEmail() {
    const fName = document.getElementById('fName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('userMessage').value;

    if (fName === null || fName === '' || email === null || email === '' || msg === '' || msg === null) {
        alert("Kindly fill all the required fields!")
    }
    else {
        Email.send({
            SecureToken: 'dummy_secure_token',
            To: 'dummyEmail@gmail.com',
            From: email,
            Subject: "User Enquiry",
            Body: "Name: " + fName
                + "<br> Email: " + email
                + "<br> Phone no: " + phone
                + "<br> Message: " + msg
        }).then(
            message => alert(message)
        );
    }
}