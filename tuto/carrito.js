//Cart 
let cartIcon = document.querySelector('#cart-icon');
let cart= document.querySelector('.cart-icon');
let closeCart = document.querySelector('#close-cart');
// Open Cart
closeCart.onclick = () => {
    cart.classList.add("active");
};
//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//Cart Workin JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready)
} else {
    ready();
}

// Making Function
function ready(){
    // Romve Items From Cartcart-remove
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCarButtons)
    for (var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }  
}

//Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}