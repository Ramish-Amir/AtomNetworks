
var navLinks = document.getElementById("navLinks");
var myNav = document.getElementById("myNav");
function openMenu() {
    navLinks.style.right = "0";
}

function closeMenu() {
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

function createForm() {
    const targetEmail = 'yourEmail@gmail.com'
    var currentPage = window.location.href;
    var contactForm = document.getElementById('contactFormContainer');
    contactForm.insertAdjacentHTML('beforeend',
        `<form class="contact-form" action="https://formsubmit.co/${targetEmail}" method="POST">
    <input type="text" name="name" placeholder="Name*" required>
    <input type="email" name="email" placeholder="Email*" required>
    <input id="phone" type="text" name="phone" placeholder="Phone"><br>
    <input type="hidden" name="_subject" value="New submission!"><br>
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="${currentPage}">
    <textarea name="textarea" required placeholder="Your Message" ></textarea>
    <button  class="blue-btn" type="submit">Send</button>
</form>`)
}

createForm();