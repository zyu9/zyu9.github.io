$(document).ready(function() {
    $("#nav_list a").click(function(){
        //alert("t"); 
        var url = $(this).attr("title") + ".json"; 
        //alert("t" + url); 
        $.getJSON(url, function(data){ 
            //alert("a");
            $.each(data, function(){ 
                $.each(this, function(key, value){ 
                    //alert("b");
                    $("#content h1").html(value.title); 
                    $("#content h2").html(value.month);
                    $("#content h3").html(value.speaker);
                    $("#content img").attr("src", value.image);
                    $("#content p").html(value.text);
                });
            });
        });
    });
	
}); // end ready