$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "featured.json",
        beforeSend: function() {
            $("#products").html("Loading...");
        },
        timeout: 10000,
        error: function(json, status, error) {
            alert("Error: " + json.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#products").html("");
            $.each(data, function() { 
                $.each(this, function(key, value) { 
                    $("#products").append( 
                        "<div class=" + "col-md-3 text-center" + ">" +
                        "<img src= "+ value.image + "alt=" + value.name + ">" +  
                        "<br>" + value.name + "<br>" + "</div>"
                    ); 
                }); 
            });  
        }
    });
});