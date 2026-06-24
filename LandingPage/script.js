/* ===================== Smooth, accessible interactions ===================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Set year
const yearEl = $('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile menu toggle
const hamburgerBtn = $('[data-hamburger]');
const mobileMenu = $('[data-mobile-menu]');

function setMenuOpen(isOpen) {
    if (!mobileMenu || !hamburgerBtn) return;
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu?.classList.contains('is-open') ?? false;
        setMenuOpen(!isOpen);
    });
}

// Close menu on link click
$('[data-mobile-menu]')?.addEventListener('click', (e) => {
    const link = e.target.closest('[data-close-menu]');
    if (link) setMenuOpen(false);
});

// Close menu on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
});

// ===================== Reveal on scroll =====================
const revealEls = $$('[data-reveal], .reveal');

const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    }
}, { threshold: 0.12 });

revealEls.forEach((el) => io.observe(el));

// ===================== Contact form (front-end demo) =====================
const form = $('#contactForm');
const status = $('#formStatus');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = $('#name')?.value?.trim() ?? '';
    const email = $('#email')?.value?.trim() ?? '';
    const phone = $('#phone')?.value?.trim() ?? '';
    const message = $('#message')?.value?.trim() ?? '';

    if (!name || !email || !phone || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = '#b91c1c';
        return;
    }
    if (!isValidEmail(email)) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = '#b91c1c';
        return;
    }

    // Simulate submit
    status.style.color = '#0f766e';
    status.textContent = 'Submitting...';

    setTimeout(() => {
        status.textContent = 'Submitted successfully! Our team will contact you shortly.';
        form.reset();
    }, 650);
});
/* ===================== THEME TOGGLE ===================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("collegecrest-theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-theme");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';
}

themeToggle?.addEventListener("click",()=>{

    document.body.classList.toggle("dark-theme");

    const darkMode =
    document.body.classList.contains("dark-theme");

    localStorage.setItem(
        "collegecrest-theme",
        darkMode ? "dark" : "light"
    );

    themeToggle.innerHTML = darkMode
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

});
/* ===================== STAGGER CARD ANIMATION ===================== */

const animatedCards = document.querySelectorAll(
    ".card, .college-card"
);

const cardObserver = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animatedCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                }, index * 120);

            });

        }

    });

},
{
    threshold:0.15
});

animatedCards.forEach(card=>{
    cardObserver.observe(card);
});
/* ===================== ACTIVE NAV LINK ===================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active-link");

        }

    });

});
window.addEventListener("scroll", () => {
    document.querySelector(".site-header")
        ?.classList.toggle(
            "scrolled",
            window.scrollY >50
        );
});