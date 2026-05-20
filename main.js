document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});

/* ============================================= */
/* ============ SCROLL REVEAL EFFECTS ========== */
/* ============================================= */

const revealElements = document.querySelectorAll(`
    .about-card,
    .skills-panel,
    .ai-card,
    .experience-card,
    .modern-project-card,
    .additional-project-card,
    .exploring-card,
    .stat-card
`);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ============================================= */
/* ========== ACTIVE NAVIGATION STATE ========== */
/* ============================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

/* ============================================= */
/* ============ ANIMATED COUNTERS ============== */
/* ============================================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function animateCounters() {

    if (countersStarted) return;

    const statsSection = document.querySelector(".stats-section");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        countersStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 60;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 96) {
                        counter.textContent = "96%+";
                    }

                    else if (target === 100) {
                        counter.textContent = "100%";
                    }

                    else {
                        counter.textContent = target + "+";
                    }

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();