/* $(document).ready(function() { 
    // preload images 
    $("#image_list a").each(function() { 
        var swappedImage = new Image(); 
        swappedImage.src = $(this).attr("href"); 
    }); 
 
    // set up event handlers for links     
    $("#image_list a").click(function(evt) { 
        // swap image 
        var imageURL = $(this).attr("href"); 
        $("#main_image").attr("src", imageURL); 
         
        //swap caption 
        var caption = $(this).attr("title"); 
        $("#caption").text(caption); 
                 
        // cancel the default action of the link 
        evt.preventDefault();  // jQuery cross-browser method 
    }); // end click 
 
    // move focus to first thumbnail 
    $("li:first-child a").focus(); 
}); // end ready  */

var imgDuration = 5000;
var fadeSpeed = 2000;
var container = $('#slideshow-container');
var curIndex = -1;

function slideShow() {
 container + $('img.slideshow_images').eq(curIndex).fadeOut(fadeSpeed);
 container + $('img.slideshow_images').eq(curIndex  = curIndex < container.children().length - 1 ? curIndex + 1 : 0).fadeIn(fadeSpeed);
 setTimeout("slideShow()", imgDuration);
}

slideShow();