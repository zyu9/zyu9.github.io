$(document).ready(function() {
    $("#nav_list a").click(function(){
        alert("t"); 
        var url = $(this).attr("title") + ".json"; 
        $.getJSON(url, function(data){ 
            alert("a");
            $.each(data, function(){ 
                $.each(this, function(key, value){ 
                    alert("b");
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