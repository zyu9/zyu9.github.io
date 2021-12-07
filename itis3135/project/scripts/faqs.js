//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });


    var url = "faqs.json"; 
    $.getJSON(url, function(data) { 
        var html = ""; 
        $.each(data.items, function(i, item){ 
            html += "<h3>" + value.question + "</h3>" + "<div>"+ "<p>" + value.answer + "</p>" + "</div>";
        }); 
        $("#accordion").html(html); 
    }); 

    $("#accordion").accordion( "resize" );  
});