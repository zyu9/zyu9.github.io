$(document).ready(function() {
        // preload the image for each link
        $("#image_list a").each(function() { 
                var swappedImage = new Image(); 
                swappedImage.src = $(this).attr("href"); 
        });
        // set up the event handlers for each link
        $("#image_list a").click(function(evt) { 
                // get the image URL and caption for each image and animate the caption
                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");  

                $("#main_image").fadeOut(3000, function(){
                        // swap image  
                        $("#main_image").attr("src", imageURL).fadeIn(3000); 
                }); 
                $("#caption").fadeOut(3000, function(){
                        //swap caption 
                        $("#caption").text(caption).fadeIn(3000);        
                });
                // cancel the default action of the link 
                evt.preventDefault();  // jQuery cross-browser method 
        }); // end click 

    // move the focus to the first link
    $("li:first-child a").focus(); 
}); // end ready