if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", ready);
}else {
	ready();
}

function ready() {
	
	var removeCartButtons = document.getElementsByClassName('ps-remove');
	console.log(removeCartButtons);
	for(var i=0; i<removeCartButtons.length; i++) {
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
		
	}
}

function removeCartItem(event) {
	var buttonClicked =event.target;
	buttonClicked.parentElement.remove();
	updatetotal();
}

function updatetotal() {
	var cartContent = document.getElementsByClassName('ps-cart__content')[0];
	var cartBoxes = cartContent.getElementsByClassName('ps-cart-item');
	var total = 0;
	for(var i=0; i<cartBoxes.length; i++) {
		var cartBox = cartBoxes[i]
		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
		var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];	
		var price = parseFloat(priceElement.innerText.replace("$", ""));
		var quantity = quantityElement.value;
		total = total +  (price * quantity);
		
		document.getElementsByClassName('ps-cart__total')[0].innerText = '$' + total;
		
		
	}
}
