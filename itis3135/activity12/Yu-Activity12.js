$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true, 
        captions: true, 
        speed: 3000, 
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1, 
        slideWidth: 500,
        slideMargin: 20,
        pager: true, 
        pagerSelector: "#id_pager"
    });
});