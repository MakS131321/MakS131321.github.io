$(function() {

    /* Fixed shapka */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
                                       
    $(window).on("scroll", function() {
        
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    })                          
    
    
    /* Plavniy scroll */
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        
        $("html, body").animate({
           scrollTop: elementOffset -70
        });

        
    })
    
});