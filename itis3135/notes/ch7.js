//DOM-compliant code that cancels the default action
var event_handler = function(evt){
    e.preventDefault(); 
};

//Older IE code that cancels the default action
var event_handler = function(){
    var evt = window.event; 
    evt.returnValue = false; 
};

//How to preload an image with the Image object
//How to create an image object
var image = new Image();
//How to load an image in an image object
image.src = "image_name.jpg";