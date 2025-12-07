$(document).ready(function() {
    
    $(".nav-button").mouseenter(function() {
        $(this).css({position:"relative"});
        $(this).animate({
            paddingLeft:'25px',
            paddingRight:'25px',
            fontSize:'18px'
        }, "slow");
    });

    $(".nav-button").mouseleave(function() {
        $(this).animate({
            paddingLeft:'18px',
            paddingRight:'18px',
            fontSize:'16px'
        }, "slow");
    });

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

});
