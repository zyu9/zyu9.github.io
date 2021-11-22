$(document).ready(function(){
    var url = 
    "http://api.flickr.com/services/feeds/photos_public.gne?" + 
    "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    $.getJSON(url, function(data) { 
        var html = ""; 
        $.each(data.items, function(i, item){ 
            //html += "<a href=" +  item.media.m + "data-lightbox=" + "building" + "data-title=" + item.title + ">" + "<img src=" + item.media.m + ">" +"</a>"; 
            html += "<img src= " + item.media.m + ">"; 
        }); 
        $("#new_building").html(html); 
    }); 

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});