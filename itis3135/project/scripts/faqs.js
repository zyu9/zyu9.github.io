//<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });

    $.ajax({
        type: "get",
        url: "faqs.json",
        beforeSend: function() {
            $("#accordion").html("Loading...");
        },
        timeout: 10000,
        error: function(json, status, error) {
            alert("Error: " + json.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#accordion").html("");
            $.each(data, function() { 
                $.each(this, function(key, value) { 
                    $("#accordion").append( 
                        "<h3>" + value.question + "</h3>" +
                        "<p>" + value.answer + "</p>"
                    ); 
                }); 
            });  
        }
    });

    $("#accordion").accordion( "resize" );  
});