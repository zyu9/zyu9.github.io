$(document).ready(function() {
    $("#nav_list a").click(function(){
        $.getJSON($(this).attr("title")+".json", function(data){ 
           
            $.each(data, function(){ 
                $.each(this, function(key, value){ 
                    $("#content h1").append(value.title); 
                    $("#content h2").append(value.month);
                    $("#content h3").append(value.speaker);
                    $("#content img").attr("src", value.image);
                    $("#content p").append(value.text);
                }); 
            });  
        });
    });
	
}); // end ready