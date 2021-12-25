var email = document.forms['form']['email'];
var password = document.forms['form']['password'];


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated(){
    if(email.value.length < 9 ){
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if(password.value.length < 6 ){
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        return true;
    }
}

function pass_Verify(){
    if(password.value.length >= 6){
        password.style.border = "1px solid silver";
        return true;
    }
}

var $hamburger = document.querySelector('.hamburger');
var $menu = document.querySelector('.menu-bar');
var $cartModal = document.querySelector('#card-modal');
var $cartButton = document.querySelector('.header__menu--cart');
var $cartClose = document.querySelector('#cart-modal__close');

function toggleMenu() {
    $menu.classList.toggle('active-mobile');
}

function toggleCart() {
    $cartModal.classList.toggle('cart-modal--on');
}

function hideCart() {
    $cartModal.classList.remove('cart-modal--on');
}

$hamburger.addEventListener('click', toggleMenu);
$cartButton.addEventListener('click', toggleCart);
$cartClose.addEventListener('click', hideCart);




let carts = document.querySelectorAll(".menu__button"); 
let products = [ 
{ 
    name: 'Hamburger', 
    tag: 'hamburger', 
    price: 800, 
    inCart: 0 
}, 
{ 
    name: 'Pizza', 
    tag: 'pizza', 
    price: 1200, 
    inCart: 0 
}, 
{ 
    name: 'Fries', 
    tag: 'fries', 
    price: 300, 
    inCart: 0 
}, 
{ 
    name: 'Juice', 
    tag: 'juice', 
    price: 250, 
    inCart: 0 
}, 
{ 
    name: 'Nagets', 
    tag: 'nagets', 
    price: 600, 
    inCart: 0 
}, 
{ 
    name: 'Doner', 
    tag: 'doner', 
    price: 800, 
    inCart: 0 
}, 
{ 
    name: 'HotDog', 
    tag: 'hotdog', 
    price: 700, 
    inCart: 0 
}, 
{ 
    name: 'Chiken', 
    tag: 'chiken', 
    price: 1200, 
    inCart: 0 
}, 
{ 
    name: 'Combo1', 
    tag: 'combo1', 
    price: 1800, 
    inCart: 0 
}, 
{ 
    name: 'Combo2', 
    tag: 'combo2', 
    price: 2000, 
    inCart: 0 
}, 
{ 
    name: 'Combo3', 
    tag: 'combo3', 
    price: 2500, 
    inCart: 0 
}, 
{ 
    name: 'Combo4', 
    tag: 'combo4', 
    price: 3000, 
    inCart: 0 
}, 
] 
 
for(let i = 0;i<carts.length;i++){ 
    carts[i].addEventListener('click',() =>{ 
        cartNumbers(products[1]); 
        totalCost(products[i] ) 
    }) 
} 
 
function onLoadCartNumbers(){ 
    let productNumbers = localStorage.getItem('cartNumbers'); 
    if(productNumbers){ 
        document.querySelector('.cart span').textContent = productNumbers; 
    } 
} 
 
function cartNumbers(product){ 
    let productNumbers = localStorage.getItem('cartNumbers'); 
    productNumbers = parseInt(productNumbers); 
   
    if(productNumbers){ 
        localStorage.setItem('cartNumbers', productNumbers+1); 
        document.querySelector('.cart span').textContent=productNumbers + 1; 
    }else{ 
        localStorage.setItem('cartNumbers',1); 
        document.querySelector('.cart span').textContent=1; 
 
    }     
    setItems(product) 
} 
function setItems(product){ 
    let cartItems = localStorage.getItem('productsInCart'); 
    cartItems = JSON.parse(cartItems); 
 
    if(cartItems != null){ 
        if(cartItems[product.tag] != undefined){ 
            cartItems={ 
                ...cartItems, 
                [produc.tag]: produc     
            } 
        } 
        cartItems[product.tag].inCart += 1; 
    }else{ 
        product.inCart = 1; 
        cartItems = { 
        [product.tag]: produc 
      }  
    } 
 
     
    localStorage.setItem("productsInCart",JSON.stringify(cartItems)); 
} 
function totalCost(product){ 
  //  console.log("The product price is", product.price); 
    let cartCost = localStorage.getItem('totalCost'); 
    
    console.log("My cartCost is", cartCost); 
    console.log(typeof cartCost ); 
    if( cartCost!=null){ 
        cartCost = parseInt(cartCost); 
        localStorage.setItem("totalCost",cartCost + product.price); 
 
    } else { 
 
        localStorage.setItem("totalCost", product.price); 
    } 
} 
onLoadCartNumbers(); 1