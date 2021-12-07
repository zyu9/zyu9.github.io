//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    var url = "faqs.json"; 
    alert("url" + url); 
    
    $.getJSON(url, function(data) { 
        var html = ""; 
        $.each(data.items, function(i, item){ 
            html += "<h3>" + value.question + "</h3>" + "<div>"+ "<p>" + value.answer + "</p>" + "</div>";
        }); 
        $("#accordion").html(html); 
    }); 

    //$("#accordion").accordion( "resize" );  
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });
});