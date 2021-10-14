var $ = function(id) {
	return document.getElementById(id);
};

function click(){
	alert("image clicked!");
}

window.onload = function() {


	//add onclick event handler for each image
	// for click event add item to order and update total
	$("menu").onclick = click; 
	// display order and total

	
		
}; // end onload