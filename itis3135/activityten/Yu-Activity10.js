$(document).ready(function() {
        // preload the image for each link
        $("#image_list a").each(function() { 
                var swappedImage = new Image(); 
                swappedImage.src = $(this).attr("href"); 
        });
        // set up the event handlers for each link
        $("#image_list a").click(function(evt) { 
                // get the image URL and caption for each image and animate the caption

                // swap image 
                var imageURL = $(this).attr("href"); 
                //$(this).fadeOut(3000);
                $("#main_image").fadeOut(3000).attr("src", imageURL); 
                 
                //swap caption 
                var caption = $(this).attr("title"); 
                $("#caption").text(caption); 
                         
                // cancel the default action of the link 
                evt.preventDefault();  // jQuery cross-browser method 
        }); // end click 

    // move the focus to the first link
    $("li:first-child a").focus(); 
}); // end ready