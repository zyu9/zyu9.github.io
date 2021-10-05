//How to get the text of an HTML element with “email_error” as its id
var errorText = $("email_error").firstChild.nodeValue;

//How to set the text of an HTML element with “email_error” as its id:
$ ("email_error").firstChild.nodeValue = "Entry is invalid."; 

//How to set the text of an HTML element without using its id:
$ ("email_address").nextElementSibling.firstChild.nodeValue = ""; 

//How to create an array of all <a> tags in a document
var links = document.getElementsByTagName('a'); 

//How to create an array of all li tags within a ul element (image_list)
var list = document.getElementsById("image_list");
var items = list.getElementsByTagName("li"); 

//How to test for and get an attribute
var list = document.getElementsById("image_list");
if(list.hasAttribute("class")){
    var classAttribute = list.getAttribute("class"); 
}

//How to set an attribute
var list = document.getElementsById("image_list");
list.setAttribute("class", "open");

//How to remove an attribute
var list = document.getElementById("image_list");
list.removeAttribute("class"); 

//How to get and set the same attribute with the DOM HTML specification
alert(imageElement.src);
imageElemt.src = "lures.jps"; 

"use strict";
var $ = function(id){return document.getElementsById(id)}; 

var processEntries= function() {
    var isValid = true;
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "Text";
    if ($("email").checked) { contact = "Email"; }
    if ($("none").checked) { contact = "None"; }
    var terms = $("terms").checked;
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false; 
    }else {
        $("email_address").nextElementSibling.firstChild.nodeValue = ""; 
    }
}