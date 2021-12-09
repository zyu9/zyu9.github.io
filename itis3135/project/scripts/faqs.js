//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    var url = "faqs.json"; 

    $.getJSON(url, function(data) { 
        $.each(data.items, function(i, item){ 
            $("#accordion").append("<h3>" + item.question + "</h3>" + "<div>"+ "<p>" + item.answer + "</p>" + "</div>");
        }); 
    }); 
});