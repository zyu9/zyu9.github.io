$(document).ready(function() { 
    var index; 
    var images = []; 
    var titles = []; 
 
    $("#image_list a").each(function() { 
        images.push($(this).attr("href"));
        titles.push($(this).attr("title")); 

        var swappedImage = new Image(); 
        swappedImage.src = $(this).attr("href"); 
    }); 

    $("#image_list a").click(function(evt) { 
        index = $("#image_list a").index(this); 

        var imageURL = $(this).attr("href"); 
        $("#main_image").attr("src", imageURL); 
         
        var caption = $(this).attr("title"); 
        $("#caption").text(caption); 
                 
        evt.preventDefault();  
    }); 
 
    $("li:first-child a").focus(); 

    $(".prev").click(function(){
        if(index  < images.length - 1 || index > 0)
        {
            index = index - 1;
        }

        var imageURL = images[index]; 
        $("#main_image").attr("src", imageURL); 
        
        var caption = titles[index]; 
        $("#caption").text(caption); 

        evt.preventDefault();  
    }); 

    $(".next").click(function(){
        if(index  < images.length - 1 || index > 0)
        {
            index = index + 1;
        }

        var imageURL = images[index]; 
        $("#main_image").attr("src", imageURL); 
        
        var caption = titles[index]; 
        $("#caption").text(caption); 
    
        evt.preventDefault();  
    }); 
}); 