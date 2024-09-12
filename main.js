document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Display around 3 slides at a time
        spaceBetween: 10,   // Space between slides
        loop: true,         // Enable slide looping
        centeredSlides: true, // Center the active slide
        navigation: {
            nextEl: '.swiper-button-next', // Next button
            prevEl: '.swiper-button-prev', // Previous button
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Make pagination clickable
        },
        grabCursor: true,           // Change cursor on hover
        slideToClickedSlide: true,  // Click to navigate to a slide
        autoplay: {
            delay: 3000, // Time between slide changes in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
    });

    // Stop autoplay on hover and resume when not hovering
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            swiper.autoplay.stop(); // Stop autoplay when mouse enters a card
        });

        card.addEventListener('mouseleave', () => {
            swiper.autoplay.start(); // Resume autoplay when mouse leaves the card
        });
    });

    // Recreate Swiper loop on visibility change to prevent cards from disappearing
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            swiper.loopDestroy(); // Destroy the current loop
            swiper.loopCreate();  // Recreate the loop to ensure slides reappear
            swiper.update();      // Reinitialize Swiper
        }
    });
});
