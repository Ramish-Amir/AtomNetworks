
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

function createFooter() {
    var footer = document.getElementById('pageFooter');
    footer.insertAdjacentHTML('beforeend',
        `<div class="footer-col">
    <a href="./index.html"><img width="200px" src="./assets/logo-w-slide.png" alt="logo"></a>
    MON - FRI 09:00 - 13:00 | 14:30 - 19:00 <br>
    SAT 09:00 - 13:00 | SUN closed
</div>
<div class="footer-col">
    <span><b>Services</b></span>
    <a href="./home-internet.html">Internet for your home</a>
    <a href="./business-internet.html">Internet for your business</a>
    <a href="./home-voip.html">VoIP for your home</a>
    <a href="./business-voip.html">VoIP for your business</a>
    <a href="./switchboard.html">Switchboard in the cloud</a>
</div>
<div class="footer-col">
    <span><b>Legal Information</b></span>
    <a href="./terms-conditions">General terms and services</a>
    <a href="./service-charter">Service charter</a>
    <a href="./tariff-trans">Tariff transparency</a>
    <a href="./dispute-resolution">Dispute resolution</a>
    <a href="./privacy">Privacy and cookies</a>
    <a href="./ehtical-code">Ethical code</a>
    <a href="./db-facilitation">Deaf/blind facilitations</a>
</div>
<div class="footer-col">
    <span><b>Contact</b></span>
    <a href="./about">Who we are?</a>
    <a href="./contact">Contacts</a>
    <hr>
    <div class="footer-favs">
        <a href="https://www.facebook.com/AtomoNetworks/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/atomo_networks_srl/?hl=it" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCc9YpIWmZbyVL2i6ZuD1ABw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/atomo-networks/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
</div>`)
}


createForm();
createFooter();