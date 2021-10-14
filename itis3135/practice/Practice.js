var $ = function(id) {
	return document.getElementById(id);
};

var coffeeName, price, total, detail; 
var n = 0; 
var m = 0; 


function espresso(){
	coffeeName = "Espresso"; 
	price = 1.95; 
	detail = "Delicious espresso. Wanna try it?"; 
	var order = document.createElement("p");
	order.textContent = "$" + price + " - " + coffeeName + " - " + detail; 
	var orders = $("order");
	orders.appendChild(order); 
	n = n+1; 
	calculateTotal(); 
}

function cappuccino(){
	coffeeName = "Cappuccino"; 
	price = 3.45;
	detail = "Delicious Cappuccino!";
	var order = document.createElement("p");
	order.textContent = "$" + price + " - " + coffeeName + " - " + detail; 
	var orders = $("order");
	orders.appendChild(order); 
	m = m+1; 
	calculateTotal();
}

function calculateTotal(){
	if(n > 0 || m > 0){
		total = "Total: " + parseFloat((1.95 * n + 3.45 * m).toFixed(2));
		var displayTotal = $("total");
		displayTotal.innerHTML = total;
	}
}

window.onload = function() {
	//add onclick event handler for each image
	// for click event add item to order and update total
	$("espresso").onclick = espresso; 
	$("cappuccino").onclick = cappuccino; 
	// display order and total
}; // end onload