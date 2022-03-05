
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

function openRouters() {
    window.location.href = "./routers.html";
}

function createFavicons() {
    var fav = document.getElementById('favicons');
    if (fav !== null) {
        fav.insertAdjacentHTML('beforeend',
            `<a href="https://www.facebook.com/AtomoNetworks/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/atomo_networks_srl/?hl=it" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCc9YpIWmZbyVL2i6ZuD1ABw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/atomo-networks/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`
        )
    }
}


function createServices() {
    var ser = document.getElementById('moreServices');
    if (ser !== null) {
        ser.insertAdjacentHTML(`beforeend`,
            `<h1>E sempre per Te</h1>
        <div class="more-card-container">
            <div class="more-card">
                <div class="m-card-body assisstance">
                    <div class="m-card-content">
                        Un call center a te dedicato, pronto a rispondere per qualsiasi evenienza.
                    </div>
                </div>
                <div class="m-card-header">
                <i class="fa-solid fa-headphones-simple"></i>
                    <span><b>Assistenza</b></span>
                </div>
            </div>

            <div class="more-card" onclick="openRouters()">
                <div class="m-card-body router">
                    <div class="m-card-content">
                        Scegli il modem più adatto alle tue esigenze.
                    </div>
                </div>
                <div class="m-card-header">
                <i class="fa-solid fa-sitemap"></i>
                    <span><b>Router</b></span>
                </div>
            </div>

            <div class="more-card">
                <div class="m-card-body landline">
                    <div class="m-card-content">
                        Possibilità di acquistare il telefono fisso delle migliori marche al momento in uso.
                    </div>
                </div>
                <div class="m-card-header">
                <i class="fa-solid fa-phone-volume"></i>
                    <span><b>Telefono fisso</b></span>
                </div>
            </div>
        </div>`
        )
    }
}

function createAccordion() {
    var ac = document.getElementById("accordionsContainer");

    if (ac !== null) {
        // var ac = document.getElementById('accordionsContainer');
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

function createForm() {
    var contactForm = document.getElementById('contactFormContainer');
    contactForm.insertAdjacentHTML('beforeend',
        `<form class="contact-form">
    <input type="text" id="username" placeholder="Name*" required>
    <input type="email" name="email" id="customerEmail" placeholder="Email*" required>
    <input id="phone" type="text" name="phone" placeholder="Phone"><br>
    <textarea name="textarea" id="userMessage" required placeholder="Your Message"></textarea>
</form>
<button class="blue-btn" onclick="sendMail()">Send</button>
`)
}

function createContactSection() {
    const contactSection = document.getElementById('contactSection');
    contactSection.insertAdjacentHTML('beforeend',
        `<div class="contact-container">
    <div class="contact-left">
        <i class="fas fa-phone-alt"></i>
        <br>
        <h3>
            091 748 10 23
        </h3>
        <h3>
            Richiedi un preventivo e scopri quanto è facile cominciare a risparmiare
        </h3>
        <p>
            I nostri consulenti e tecnici specializzati saranno sempre al tuo fianco e non dovrai più preoccuparti di manutenzione e assistenza con fatture da capogiro.
        </p>
    </div>
    <div class="contact-right" id="contactFormContainer"></div>
</div>
<h1>Scegli Atomo Networks</h1>
<br>`)
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
    <a href="./terms-conditions.html">Condizioni generali di contratto</a>
    <a href="./service-charter.html">Carta dei servizi</a>
    <a href="./tariff-trans.html">Trasparenza tariffaria</a>
    <a href="./dispute-resolution.html">Risoluzione delle controversie</a>
    <a href="./privacy.html">Privacy & Cookies</a>
    <a href="./ethical-code.html">Codice etico</a>
    <a href="./db-facilitation.html">Agevolazioni non Udenti / non Vedenti</a>
</div>
<div class="footer-col">
    <span><b>Contatti</b></span>
    <a href="./about.html">CHI SIAMO?</a>
    <a href="./contact.html">Contatti</a>
    <hr>
    <div class="footer-favs">
        <a href="https://www.facebook.com/AtomoNetworks/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/atomo_networks_srl/?hl=it" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCc9YpIWmZbyVL2i6ZuD1ABw" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/atomo-networks/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
</div>`)
}


createFavicons();
createServices();
createAccordion();
createContactSection();
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

function sendMail() {
    const username = document.getElementById('username').value;
    const userEmail = document.getElementById('customerEmail').value;
    const phone = document.getElementById('phone').value;
    const userMessage = document.getElementById('userMessage').value;

    if (username == null || username == '' || userEmail == null || userEmail == '' || userMessage == null || userMessage == '') {
        return
    } else {
        const url = 'http://localhost:3000/submit';
        const data = {
            custName: username,
            custEmail: userEmail,
            custPhone: phone,
            custMessage: userMessage
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    alert('Form submitted successfully');
                }
            })
            .catch(error => {
                console.log(error)
                alert('Failed to submit form. Please try again!');
            })
    }
}
