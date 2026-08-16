```javascript
/* =================================
   MENU MOBILE
================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* =================================
   TUTUP MENU SAAT LINK DIKLIK
================================= */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =================================
   DARK MODE
================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =================================
   TAHUN OTOMATIS
================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =================================
   SCROLL REVEAL
================================= */

const sections = document.querySelectorAll(
    ".section-title, .about-content, .event-card, .member, .timeline-item, .gallery-item"
);

sections.forEach(element => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    sections.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =================================
   SMOOTH BUTTON
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
```
