/* =========================================
   J.JOYLITE AGRO VENTURES
   MAIN WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("mobile-open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu when a link is clicked */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();


        if (!name || !phone || !email || !message) {

            showFormMessage(
                "Please fill in all the required fields.",
                "error"
            );

            return;

        }


        /*
         * For now, the form creates a WhatsApp message.
         *
         * Later, we can connect this to a proper backend/database
         * so the business owner can receive and manage enquiries.
         */

        const whatsappMessage = `
Hello J.JOYLITE AGRO VENTURES,

My name is ${name}.

Phone: ${phone}
Email: ${email}

Message:
${message}

I would like to make an enquiry.
        `.trim();


        const whatsappURL =
            `https://wa.me/2348121212588?text=${encodeURIComponent(whatsappMessage)}`;


        showFormMessage(
            "Opening WhatsApp so you can send your enquiry...",
            "success"
        );


        setTimeout(() => {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 700);

    });

}


/* =========================================
   FORM MESSAGE
========================================= */

function showFormMessage(message, type) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = message;

    formMessage.style.display = "block";

    if (type === "success") {

        formMessage.style.color = "#166534";
        formMessage.style.background = "#dcfce7";
        formMessage.style.border = "1px solid #bbf7d0";

    } else {

        formMessage.style.color = "#991b1b";
        formMessage.style.background = "#fee2e2";
        formMessage.style.border = "1px solid #fecaca";

    }

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".benefit, .product-card, .step, .about-content, .contact-form-card"
);

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});