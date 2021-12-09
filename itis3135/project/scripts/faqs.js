//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    var url = "faqs.json"; 

    $.getJSON(url, function(data) { 
        var html = ""; 
        $.each(data.items, function(i, item){ 
            html += "<h3>" + item.question + "</h3>" + "<div>"+ "<p>" + item.answer + "</p>" + "</div>";
        }); 
        $("#accordion").html(html); 

        $("#accordion").accordion({
            event: "click",
            heightStyle: "content",
            collapsible: true
        });
    }); 
});