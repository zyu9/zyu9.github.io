$(document).ready(function() {
    //getJSON funtion, based on activity 16
    $.getJSON("faqs.json", function(data){ 
        $.each(data, function() { 
            $.each(this, function(key, value) {  
                $("#accordion").append( 
                    "<h3>" + value.question + "</h3>" + "<div>"+ "<p>" + value.answer + "</p>" + "</div>"
                ); 
            }); 
        });  
        
        //jQuery call to the accordion, based on activity 11
        $("#accordion").accordion({
            event: "click",
            heightStyle: "content",
            collapsible: true
        }); 
    }); 
});