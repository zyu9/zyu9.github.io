$(document).ready(function () {
    $('#cart').simpleCart();
});

$(document).ready(function () {
    $('#cart').simpleCart({
      addtoCartClass: '.sc-add-to-cart',
      cartProductListClass: '.cart-products-list',
      totalCartCountClass: '.total-cart-count',
      totalCartCostClass: '.total-cart-cost',
      showcartID : '#show-cart',
      itemCountClass : '.item-count'
    });
});