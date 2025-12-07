/* =============================================
   jQuery-based Portfolio Script
   Using concepts taught in class
   ============================================= */

// Wait for the DOM to be fully loaded
$(document).ready(function() {
    
    /* =============================================
       1. Append skill items dynamically on button click
       ============================================= */
    $("#download-btn").click(function() {
        $(".tagline").append("<br>Building Amazing Web Projects!");
    });

    /* =============================================
       2. Animate navigation buttons on hover
       ============================================= */
    $(".nav-button").mouseenter(function() {
        $(this).css({position:"relative"});
        $(this).animate({
            paddingLeft:'25px',
            paddingRight:'25px',
            fontSize:'18px'
        }, "fast");
    });

    $(".nav-button").mouseleave(function() {
        $(this).animate({
            paddingLeft:'18px',
            paddingRight:'18px',
            fontSize:'16px'
        }, "fast");
    });

    /* =============================================
       3. Animate download button on click
       ============================================= */
    $(".download-btn").click(function() {
        $(this).css({position:"relative"});
        $(this).animate({
            fontSize:'18px',
            paddingLeft:'40px',
            paddingRight:'40px'
        }, 300);
        
        $(this).animate({
            fontSize:'16px',
            paddingLeft:'30px',
            paddingRight:'30px'
        }, 300);
    });

    /* =============================================
       4. Animate content cards on hover
       ============================================= */
    $(".content-card").mouseenter(function() {
        $(this).css({position:"relative"});
        $(this).animate({
            left:'10px'
        }, 200);
    });

    $(".content-card").mouseleave(function() {
        $(this).animate({
            left:'0px'
        }, 200);
    });

    /* =============================================
       5. Change background color of header section
       ============================================= */
    $(".header-section").click(function() {
        $(this).animate({
            opacity:'0.9'
        }, 500);
        $(this).animate({
            opacity:'1'
        }, 500);
    });

    /* =============================================
       6. Append items to lists dynamically
       ============================================= */
    $(".section-title").click(function() {
        $(this).animate({
            fontSize:'35px'
        }, 200);
        $(this).animate({
            fontSize:'32px'
        }, 200);
    });

    /* =============================================
       7. Toggle Project Details (slideToggle)
       ============================================= */
    $('.toggle-details-btn').click(function() {
        var button = $(this);
        var detailsDiv = button.siblings('.project-details');
        
        detailsDiv.slideToggle(400, function() {
            if (detailsDiv.is(':visible')) {
                button.text('Hide Details');
            } else {
                button.text('Show Details');
            }
        });
    });

    /* =============================================
       8. Smooth Scroll for Navigation Links
       ============================================= */
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href');
        var targetElement = $(target);
        
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 80
            }, 800);
        }
    });

    /* =============================================
       9. Animate footer on scroll
       ============================================= */
    $(window).scroll(function() {
        var footerPos = $(".footer-section").offset().top;
        var scrollPos = $(window).scrollTop() + $(window).height();
        
        if (scrollPos > footerPos) {
            $(".footer-section").css({opacity:'1'});
        }
    });

    console.log('Portfolio script loaded successfully!');
});
