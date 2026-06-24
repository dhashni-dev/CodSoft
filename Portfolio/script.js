/* ==========================================
   TYPOWRITER EFFECT
========================================== */

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "Java Programmer",
    "Web Designer",
    "Problem Solver",
    "CSE Student"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


/* ==========================================
   THEME TOGGLE + SAVE
========================================== */

const themeBtn =
    document.getElementById("themeToggle");

const html =
    document.documentElement;

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme) {

    html.setAttribute(
        "data-theme",
        savedTheme
    );

    updateThemeIcon(savedTheme);
}

themeBtn.addEventListener("click", () => {

    const currentTheme =
        html.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    html.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "theme",
        newTheme
    );

    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {

    if (theme === "light") {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }
}


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");
        }
    });
});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (
        navMenu.classList.contains("show")
    ) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }
});

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding =
            "12px 25px";

        navbar.style.backdropFilter =
            "blur(25px)";

    } else {

        navbar.style.padding =
            "16px 25px";
    }
});


/* ==========================================
   SMOOTH BUTTON HOVER GLOW
========================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("mousemove",
        (e) => {

            const rect =
                btn.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            btn.style.setProperty(
                "--x",
                `${x}px`
            );

            btn.style.setProperty(
                "--y",
                `${y}px`
            );
        });
});


/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );
});


/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(
`
🚀 Portfolio Developed by Dhash

Full Stack Developer
Java | Python | Web Development

`
);