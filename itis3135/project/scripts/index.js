$(document).ready(function(){
    var nextSlide = $("#slides img:first-child");
    var nextSlideSource; 

    var runSlideShow = function(){
        $("#slide").fadeOut(1000, function(){
            if (nextSlide.next().length == 0){
                nextSlide = $("#slides img:first-child");
            }else{
                nextSlide - nextSlide.next(); 
                nextSlideSource = nextSlide.attr("src"); 
                $("#slide").attr("src", nextSlideSource).fadeIn(1000); 
            }
        });
    }; 

    var timer1 = setInterval(runSlideShow, 3000);

    $("#slide").click(function(){
        if(timer1 != null){
            clearInterval(timer1); 
            timer1 = null; 
        }else{
            timer1 = setInterval(runSlideShow, 3000);
        }
    });
});