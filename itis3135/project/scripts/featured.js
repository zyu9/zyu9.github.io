$(document).ready(function() {

    $.getJSON("featured.json", function(data){ 
        $.each(data, function() { 
            $.each(this, function(key, value) {  
                $("#products").append( 
                    "<div class=" + "col-md-3 text-center" + ">" +
                    "<img src= "+ value.image + ">" +  
                    "<br>" + value.name + "<br>" + "</div>"
                ); 
            }); 
        });  
    }); 
});