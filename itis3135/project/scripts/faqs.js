//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "faqs.json",
        beforeSend: function() {
            $("#text").html("Loading...");
        },
        timeout: 10000,
        error: function(json, status, error) {
            alert("Error: " + json.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#text").html("");
            $.each(data, function() { 
                $.each(this, function(key, value) { 
                    $("#text").append( 
                        "<h3>" + value.question + "</h3>" +
                        "<p>" + value.answer + "</p>"
                    ); 
                }); 
            });  
        }
    });

    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });
});