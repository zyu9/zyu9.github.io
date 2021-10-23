/* var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow_slides");
  var dots = document.getElementsByClassName("slideshow_thumbnail");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} */

$(document).ready(function() { 
    // preload images 
    $("#image_list a").each(function() { 
        var swappedImage = new Image(); 
        swappedImage.src = $(this).attr("href"); 
    }); 
 
    // set up event handlers for links     
    $("#image_list a").click(function(evt) { 
        // swap image 
        var imageURL = $(this).attr("href"); 
        $("#main_image").attr("src", imageURL); 
         
        //swap caption 
        var caption = $(this).attr("title"); 
        $("#caption").text(caption); 
                 
        // cancel the default action of the link 
        evt.preventDefault();  // jQuery cross-browser method 
    }); // end click 
 
    // move focus to first thumbnail 
    $("li:first-child a").focus(); 
}); // end ready 