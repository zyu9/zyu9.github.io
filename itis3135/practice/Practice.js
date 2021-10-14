var $ = function(id) {
	return document.getElementById(id);
};

var coffeeName, price, total, detail; 


function espresso(){
	coffeeName = "Espresso"; 
	price = 1.95; 
	detail = "Delicious espresso. Wanna try it?"; 
	var order = document.createElement("p");
	order.textContent = "$" + price + " - " + coffeeName + " - " + detail; 
	var orders = $("order");
	orders.appendChild(order); 
}

function cappuccino(){
	coffeeName = "Cappuccino"; 
	price = 3.45;
	detail = "Delicious Cappuccino!";
	var order = document.createElement("p");
	order.textContent = "$" + price + " - " + coffeeName + " - " + detail; 
	var orders = $("order");
	orders.appendChild(order); 
}

window.onload = function() {


	//add onclick event handler for each image
	// for click event add item to order and update total
	$("espresso").onclick = espresso; 
	$("cappuccino").onclick = cappuccino; 
	// display order and total

	
		
}; // end onload