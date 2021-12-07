$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "shop.json",
        beforeSend: function() {
            $("#flowers").html("Loading...");
        },
        timeout: 10000,
        error: function(json, status, error) {
            alert("Error: " + json.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#flowers").html("");
            $.each(data, function() { 
                $.each(this, function(key, value) { 
                    $("#flowers").append( 
                        "<div class=" + "col-md-3 text-center" + "data-tages=" + "flowers" + ">" +
                        "<img src= "+ value.image + ">" +  
                        "<br>" + value.name + " - " + "<strong>" + "$" +
                        value.price + "<strong>" + "<br>" + 
                        "<button class=" + "btn btn-danger my-cart-btn" + "data-id=" + value.id + "data-name=" + value.name + 
                        "data-summary=" + value.name +  "data-price=" + value.price + "data-quantity=" + "1" + "data-image=" + value.image
                        + ">" + "Add to Cart"+ "</button>" + "</div>"
                    ); 
                }); 
            });  
        }
    });
});