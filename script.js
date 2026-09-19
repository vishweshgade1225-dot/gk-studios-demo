// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
    });
});


// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".service-card, .gallery-item, .feature, .about-heading, .about-text, .contact-heading, .contact-form-wrapper"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {

        alert("Please fill in all the details.");

        return;

    }

    alert(
        `Thank you, ${name}! Your enquiry has been received. GK Studios will contact you soon.`
    );

    contactForm.reset();

});


// =========================
// WHATSAPP
// =========================

const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", (event) => {

    event.preventDefault();

    /*
       DEMO ONLY

       Replace 919XXXXXXXXX with the
       actual GK Studios WhatsApp number
       before giving this website to them.
    */

    const phoneNumber = "919XXXXXXXXX";

    const message = encodeURIComponent(
        "Hi GK Studios, I found your website and would like to enquire about your photography services."
    );

    if (phoneNumber.includes("X")) {

        alert(
            "WhatsApp number is not configured yet. Add GK Studios' actual WhatsApp number in script.js."
        );

        return;

    }

    window.open(
        `https://wa.me/${phoneNumber}?text=${message}`,
        "_blank"
    );

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});