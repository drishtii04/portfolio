/* =============================================
   jQuery-based Portfolio Script
   Simple, beginner-friendly code
   ============================================= */

// Wait for the DOM to be fully loaded
$(document).ready(function() {
    
    /* =============================================
       1. Smooth Scroll for Navigation Links
       ============================================= */
    // When user clicks on any nav link with href starting with "#"
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // stop default jump behavior
        
        var target = $(this).attr('href'); // get the target section id
        var targetElement = $(target);
        
        // Smoothly scroll to the target section
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 80 // offset for sticky nav
            }, 800); // animation duration in milliseconds
        }
    });

    /* =============================================
       2. Simple Scrollspy - Highlight Active Nav
       ============================================= */
    // Get all sections with an id attribute
    var sections = $('section[id]');
    var navLinks = $('.nav-button');
    
    // Function to handle scroll and update active nav link
    function handleScroll() {
        var scrollPos = $(window).scrollTop() + 100; // offset for better trigger
        
        sections.each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            // Check if current scroll position is within this section
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                // Remove active class from all nav links
                navLinks.removeClass('active');
                // Add active class to the matching nav link
                $('a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }
    
    // Run handleScroll on page scroll
    $(window).on('scroll', handleScroll);
    
    // Run once on page load to set initial active state
    handleScroll();

    /* =============================================
       3. Toggle Project Details (slideToggle)
       ============================================= */
    // When user clicks "Show Details" button in project cards
    $('.toggle-details-btn').on('click', function() {
        var button = $(this);
        var detailsDiv = button.siblings('.project-details');
        
        // Slide toggle the details section
        detailsDiv.slideToggle(400, function() {
            // Change button text based on visibility
            if (detailsDiv.is(':visible')) {
                button.text('Hide Details');
            } else {
                button.text('Show Details');
            }
        });
    });

    /* =============================================
       4. Initial Page Load Animation (fade in)
       ============================================= */
    // Fade in header with delay
    $('.header-section').hide().fadeIn(1000);
    
    // Fade in each content section with staggered delays
    var sections = $('.content-section');
    sections.each(function(index) {
        var section = $(this);
        setTimeout(function() {
            section.addClass('fade-in'); // trigger CSS transition
        }, 200 * index); // delay increases for each section
    });

    /* =============================================
       5. Optional: Back to Top Button (simple example)
       ============================================= */
    // You can add a back-to-top button if needed
    // For now, this is a placeholder for future enhancement
    
    console.log('Portfolio script loaded successfully!');
});
