//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {

    $.getJSON("faqs.json", function(data){ 
        $.each(data, function() { 
            $.each(this, function(key, value) {  
                $("#accordion").append( 
                    "<h3>" + value.question + "</h3>" + "<div>"+ "<p>" + value.answer + "</p>" + "</div>"
                ); 
            }); 
        });  
    }); 
});