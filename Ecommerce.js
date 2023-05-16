var header = document.getElementById('header');
var productSec = document.getElementById('productSec');
// var otherProducts = document.getElementById('otherProducts')
var aboutUs = document.getElementById('aboutUs');
var contacttUs = document.getElementById('contactUs');
var popup = document.getElementById('popup');
var button = document.getElementById('conBtn');
var _close = document.getElementById('close');
var links = document.getElementById('links');
var popupTitle = document.getElementById('popupTitle');
var popupImg = document.getElementById('popupImg');
var popupDescription = document.getElementById('popupDescription');
var cartdisplay = document.getElementById('cartdisplay');
var cartlength = document.getElementById('circle');
var cartDefault = document.getElementById('cartDefault');
var total = document.getElementById('total');
var cartMeter = document.getElementById('cartMeter');
// var Screenprice = document.getElementById('price');
// var popupContent = document.getElementById('popupContent');

function displayLink(){
    console.log('wotfct')
    if (links.style.display == 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
}
function view(product_id){
    popupTitle.innerText = Products[product_id].name
    popupImg.src = Products[product_id].img
    popupDescription.innerText = Products[product_id].description
    popup.style.display = 'block';
    // console.log('working', popup);
}
function Close(){
    popup.style.display = 'none';
    
}
function home(){
    console.log('working');
    header.style.display = 'block';
    productSec.style.display = 'block';
    // otherProducts.style.display = 'none'
    aboutUs.style.display = 'none';
    contacttUs.style.display = 'none';
}
function about(){
    console.log('working');
    header.style.display = 'none';
    productSec.style.display = 'none';
    aboutUs.style.display = 'block';
    contacttUs.style.display = 'none';
}
function product(){
    header.style.display = 'none';
    productSec.style.paddingTop = '10vh';
    productSec.style.display = 'block';
    // otherProducts.style.display = 'flex'
    aboutUs.style.display = 'none';
    console.log('working');
    contacttUs.style.display = 'none';
}
function contactUs(){
    console.log('working');
    header.style.display = 'none';
    productSec.style.display = 'none';
    aboutUs.style.display = 'none';
    contacttUs.style.display = 'block';
}
var Products = [
    {
        id: 0,
        img: "./images/pexels-mstudio-1240892.jpg",
        name: "Phenoix Red JordanX",
        description: "Make Everyone jealous with these new kicks.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: 49.99
    },
    {
        id: 1,
        img: "./images/pexels-frans-van-heerden-847371.jpg",
        name: "Black and white GSCs",
        description: "Best Y2k shoes to get back in time. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: 35.99
    },
    {
        id: 2,
        img: "./images/pexels-peter-patel-637076.jpg",
        name: "Blue and white Nike ",
        description: "Best quality for the most expensive shoes, show off your wealth. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: 129.99
    },
    {
        id: 3,
        img: "./images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
        name: "Orange Nickle",
        description: "Cheap yet durable running shoes. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: 10.99
    },
    {
        id: 4,
        img: "./images/omar-prestwich-jLEGurepDco-unsplash.jpg",
        name: "K-SWISS*",
        description: "Fashion, running, jumping... These kicks were made for it all. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: 30.99
    },
]
var productSection = document.getElementById('products');
function updateProducts(){
    // console.log('Functoning')
    var productContainer = '';
    var i=0;
    for (i in Products){
        productContainer = productContainer + `<div id="product">
                                                    <div id="productimg">
                                                        <img src="${Products[i].img}" alt="">
                                                    </div>
                                                    <div id="productdescription">
                                                        <h2 id="title">${Products[i].name}</h2>
                                                        <span id="price($)">${Products[i].price}</span>
                                                    </div> 
                                                    <hr>
                                                    <div id="details">
                                                        <button id="conBtn" class="conBtn" onclick="view(${Products[i].id})">View</button>
                                                        <button id="addcart" class="conBtn" onclick = "addCart(${Products[i].id})">Add To cart</button>
                                                    </div>
                                                </div>`
                                                // console.log(i, Products[i].img)
    }
    productSection.innerHTML = productContainer;
    // console.log(productSection.innerHTML)
}
updateProducts()
var cartItems = [
    {
        id: 0,
        img: "./images/pexels-mstudio-1240892.jpg",
        name: "Phenoix Red JordanX",
        price: 49.99,
        quantity: 1,
        counting_price: 49.99
    },
]
var cartSection = document.getElementById('CartProducts');
function updateCart(){
    console.log('Cart updated');
    var cartContainer = '';
    for(i in cartItems){
        cartContainer = cartContainer + `<div id="cartproduct">
                                            <div id="cartproductimg">
                                                <img src="${cartItems[i].img}" alt="">
                                            </div>
                                            <div id="cartproductdescription">
                                                <div id="cartproductheader">
                                                    <h4 id="title">${cartItems[i].name}</h4>
                                                    <span id="deleteItem" onclick="deleteItem(${i})">&times;</span>
                                                </div>
                                                <div id="cartQuantity">
                                                    <h4>Quantity</h4>
                                                    <div id="meter">
                                                        <div id="decrease" onclick ="decrease(${i})">-</div><hr>
                                                        <div id="cartMeter">${cartItems[i].quantity}</div><hr>
                                                        <div id="increase" onclick ="addCart(${cartItems[i].id})">+</div>
                                                    </div>
                                                </div>
                                                <div id="cash">
                                                    <h4>Price($):</h4>
                                                    <span id="price">${cartItems[i].price.toFixed(2)}</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <hr>`
    }
    if (cartItems.length == 0){
        cartlength.style.display = 'none'
        cartDefault.style.display = 'block'
    }else{
        cartDefault.style.display = 'none'
        cartlength.style.display = 'block'
    }
    cartSection.innerHTML = cartContainer;
    let j = 0
    let cartCost = 0
    for(j in cartItems){
        cartCost = cartCost + cartItems[j].price
    }
    total.innerHTML = cartCost.toFixed(2);
    let r = 0;
    totalQuantity = 0;
    for (r in cartItems){
        totalQuantity = totalQuantity + cartItems[r].quantity
    }
    cartlength.innerHTML = totalQuantity
    // cartlength.innerHTML = cartItems.length + totalQuantity
}
cartItems.length = 0;
updateCart()
cartdisplay.style.display = 'none'
function showcart(){
    // console.log(cartdisplay.style.display)
    if(cartdisplay.style.display == 'none'){
        cartdisplay.style.display = 'block'
        updateCart()
        // console.log('working',cartdisplay.style.display)
    }else{
        cartdisplay.style.display = 'none'
    }
}
function addCart(id){
    for(i in cartItems){
        // console.log(cartItems)
        if (id == cartItems[i].id){
            cartItems[i].quantity += 1
            let Count_price = cartItems[i].counting_price;
            // console.log(cartItems[i].price)
            increasePrice(i,cartItems[i].quantity, Count_price)
            updateCart();
            return 0
        }
    }
    class cartitem{
        constructor(id, img,name,price, quantity,counting_price){
            this.name = name;
            this.img = img;
            this.price = price;
            this.id = id;
            this.quantity = quantity;
            this.counting_price = counting_price;
        }
    }
    cartItems.push(new cartitem(Products[id].id, Products[id].img, Products[id].name , Products[id].price, 1,Products[id].price));

    updateCart();
}
function deleteItem(id){
    // console.log(id);
    cartItems.splice(id,1)
    updateCart();
}
function increasePrice(i, quantity, price){
    let iniprice = 0
    if (quantity == 1){
        iniprice = price;
        // console.log(iniprice);
        cartItems[i].price = iniprice;
    }else{
        iniprice = price * quantity;
        cartItems[i].price = iniprice;
    }
    updateCart();
}
function decrease(id){
    cartItems[id].quantity -= 1;
    let price = cartItems[id].counting_price;
    let iniprice = 0;
    if(cartItems[id].quantity <= 0){
        deleteItem(id);
    }else if(cartItems[id].quantity == 1){
        // console.log('working')
        iniprice = price;
        // console.log(iniprice);
        cartItems[id].price = iniprice;
    }else if (cartItems[id].quantity >= 2){
        iniprice = price* cartItems[id].quantity;
        // console.log(iniprice);
        // console.log(cartItems[id].quantity);
        cartItems[id].price = iniprice;
    }
    updateCart();
}

let slideIndex = 1;
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})
function showSlides(n){
    var i;
    let slides = document.getElementsByClassName('slide')
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    if (n === -1){
      myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
      myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}
