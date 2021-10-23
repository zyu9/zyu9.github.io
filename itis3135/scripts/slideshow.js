$(document).ready(function() { 
    var images = []; 
    var titles = []; 

    // preload images 
    $("#image_list a").each(function() { 
        images.push($(this).attr("href"));
        titles.push($(this).attr("title")); 

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

    $(".prev").click(function(evt){
        $("#image_list a").each(function(i) { 
            // swap image 
            var imageURL = images[i-1]; 
            $("#main_image").attr("src", imageURL); 
            
            //swap caption 
            var caption = titles[i-1]; 
            $("#caption").text(caption); 
        }); 
    }); 

    $(".next").click(function(evt){
        $("#image_list a").each(function(i) { 
            // swap image 
            var imageURL = images[i+1]; 
            $("#main_image").attr("src", imageURL); 
            
            //swap caption 
            var caption = titles[i+1]; 
            $("#caption").text(caption); 
        }); 
    }); 
}); // end ready 