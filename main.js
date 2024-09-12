document.addEventListener('DOMContentLoaded', function() {
    let swiper;

    function initSwiper() {
        const screenWidth = window.innerWidth;

        // Only initialize Swiper with autoplay for screens larger than 768px
        if (screenWidth > 768) {
            swiper = new Swiper('.swiper-container', {
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
        } else if (screenWidth <= 768) {
            // Initialize Swiper without autoplay for mobile/tablet
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 1, // Adjust for mobile view
                spaceBetween: 10, 
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                grabCursor: true,
                slideToClickedSlide: true,
            });
        }
    }

    function destroySwiper() {
        if (swiper) {
            swiper.destroy(true, true); // Properly destroy the swiper instance
            swiper = undefined;  // Clear swiper instance
        }
    }

    function handleResize() {
        destroySwiper();  // Destroy current swiper instance
        initSwiper();     // Reinitialize Swiper based on screen size
    }

    initSwiper();  // Initialize Swiper on page load
    window.addEventListener('resize', handleResize);  // Handle window resizing
});
