$(document).ready(function() { 
    var index = 0; 
    var images = []; 
    var titles = []; 
 
    // preload images 
    $("#image_list a").each(function() { 
        images.push($(this).attr("href"));
        titles.push($(this).attr("href")); 

        var swappedImage = new Image(); 
        swappedImage.src = $(this).attr("href"); 
    }); 

    // set up event handlers for links     
    $("#image_list a").click(function(evt) { 
        index = $("#image_list a").index(this); 

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

    $(".prev").click(function(){
        if(index  < images.length - 1 || index > 0)
        {
            index = index - 1;
        }

        // swap image 
        var imageURL = images[index]; 
        $("#main_image").attr("src", imageURL); 
        
        //swap caption 
        var caption = titles[index]; 
        $("#caption").text(caption); 

        // cancel the default action of the link 
        evt.preventDefault();  // jQuery cross-browser method 
    }); 

    $(".next").click(function(){
        if(index  < images.length - 1 || index > 0)
        {
            index = index + 1;
        }

        // swap image 
        var imageURL = images[index]; 
        $("#main_image").attr("src", imageURL); 
        
        //swap caption 
        var caption = titles[index]; 
        $("#caption").text(caption); 
        // cancel the default action of the link 
        evt.preventDefault();  // jQuery cross-browser method 
    }); 
}); // end ready 