
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

function createAccordion() {
    var ac = document.getElementById("accordionsContainer");

    if (ac !== null) {
        var ac = document.getElementById('accordionsContainer');
        ac.insertAdjacentHTML('beforeend',
        `<h1>A casa, a lavoro, in città, in campagna</h1>

        <span class="accordion">
            <div><i class="fa-solid fa-angles-right"></i> ATOMO DOVE VUOI</div>
            <i class="fa-solid fa-chevron-down"></i>
        </span>
        <div class="panel">
            <div class="panel-content">
                <p>Doppia installazione e la possibilità di spostare la connessione internet nella casa che stai abitando in quel periodo.</p>
                <p>Ottima soluzione per chi ha due case che abita stabilmente a secondo della stagione o delle ferie.Ottima soluzione per chi ha due case che abita stabilmente a secondo della stagione o delle ferie.</p>
                <h3>Unico canone mensile, unica bolletta.</h3>
            </div>
        </div>

        <span class="accordion">
            <div><i class="fa-solid fa-angles-right"></i> ATOMO QUANDO VUOI</div>
            <i class="fa-solid fa-chevron-down"></i>
        </span>
        <div class="panel">
            <div class="panel-content">
                <p>Possibilità di avere internet in casa o in azienda per brevi periodi.</p>
                <h3>Paghi solo QUANDO vuoi attivarlo, senza abbonamento.</h3>
            </div>
        </div>`)
    }
}

function createFooter() {
    var footer = document.getElementById('pageFooter');
    footer.insertAdjacentHTML('beforeend',
        `<div class="footer-col">
    <a href="./index.html"><img width="200px" src="./assets/logo-w-slide.png" alt="logo"></a>
    LUN - VEN 09:00 - 13:00 | 14:30 - 19:00 <br>
    SAB 09:00 - 13:00 | DOM chiuso
</div>
<div class="footer-col">
    <span><b>Servizi</b></span>
    <a href="./home-internet.html">Internet per la tua Casa</a>
    <a href="./business-internet.html">Internet per il tuo Business</a>
    <a href="./home-voip.html">VoIP per la tua Casa</a>
    <a href="./business-voip.html">VoIP per il tuo Business</a>
    <a href="./switchboard.html">Centralino in Cloud</a>
</div>
<div class="footer-col">
    <span><b>Info Legali</b></span>
    <a href="./terms-conditions">Condizioni generali di contratto</a>
    <a href="./service-charter">Carta dei servizi</a>
    <a href="./tariff-trans">Trasparenza tariffaria</a>
    <a href="./dispute-resolution">Risoluzione delle controversie</a>
    <a href="./privacy">Privacy & Cookies</a>
    <a href="./ehtical-code">Codice etico</a>
    <a href="./db-facilitation">Agevolazioni non Udenti / non Vedenti</a>
</div>
<div class="footer-col">
    <span><b>Contatti</b></span>
    <a href="./about">CHI SIAMO?</a>
    <a href="./contact">Contatti</a>
    <hr>
    <div class="footer-favs">
        <a href="https://www.facebook.com/AtomoNetworks/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/atomo_networks_srl/?hl=it" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCc9YpIWmZbyVL2i6ZuD1ABw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/atomo-networks/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
</div>`)
}

createAccordion();
createForm();
createFooter();

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