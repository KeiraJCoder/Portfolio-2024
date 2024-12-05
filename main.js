document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
        const link = card.dataset.link; // Get the link from data-link attribute
        const projectInner = card.querySelector('.project-inner');
        const isMobile = window.innerWidth <= 768; // Detect mobile screens

        if (!isMobile) {
            // Desktop: Hover to flip, click to open
            card.addEventListener('mouseenter', () => {
                projectInner.style.transform = 'rotateY(180deg)'; // Flip on hover
            });

            card.addEventListener('mouseleave', () => {
                projectInner.style.transform = 'rotateY(0deg)'; // Flip back
            });

            card.addEventListener('click', () => {
                const isBackVisible = projectInner.style.transform === 'rotateY(180deg)';
                if (isBackVisible && link) {
                    window.open(link, '_blank'); // Open the project in a new tab
                }
            });
        } else {
            // Mobile: First click to flip, second click to open
            card.addEventListener('click', () => {
                const isFlipped = card.dataset.flipped === 'true';

                if (isFlipped && link) {
                    // Open the project on second click
                    window.open(link, '_blank');
                    card.dataset.flipped = 'false'; // Reset to original state
                    projectInner.style.transform = 'rotateY(0deg)'; // Flip back to front
                } else {
                    // Flip the card on first click
                    card.dataset.flipped = 'true';
                    projectInner.style.transform = 'rotateY(180deg)';
                }
            });
        }
    });

    // Menu toggle functionality for smaller screens
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});
