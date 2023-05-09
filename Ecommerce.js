var header = document.getElementById('header');
var productSec = document.getElementById('productSec');
var otherProducts = document.getElementById('otherProducts')
var aboutUs = document.getElementById('aboutUs');
var contacttUs = document.getElementById('contactUs');
var popup = document.getElementById('popup');
var button = document.getElementById('conBtn');
var _close = document.getElementById('close');
var links = document.getElementById('links');
var popupTitle = document.getElementById('popupTitle');
var popupImg = document.getElementById('popupImg');
var popupDescription = document.getElementById('popupDescription');
function displayLink(){
    if (links.style.display == 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
}
// the view should have the different numbers
function view(product_id){
    popupTitle.innerText = Products[product_id].name
    popupImg.src = Products[product_id].img
    popupDescription.innerText = Products[product_id].description
    popup.style.display = 'block';
    console.log('working', popup);
}
function Close(){
    popup.style.display = 'none';
    console.log('working');
}
function home(){
    console.log('working');
    header.style.display = 'block';
    productSec.style.display = 'block';
    otherProducts.style.display = 'none'
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
    console.log('working');
    header.style.display = 'none';
    productSec.style.paddingTop = '10vh';
    productSec.style.display = 'block';
    otherProducts.style.display = 'flex'
    aboutUs.style.display = 'none';
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
        price: "$ 49.99"
    },
    {
        id: 1,
        img: "./images/pexels-frans-van-heerden-847371.jpg",
        name: "Black and white GSCs",
        description: "Best Y2k shoes to get back in time. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: "$ 35.99"
    },
    {
        id: 2,
        img: "./images/pexels-peter-patel-637076.jpg",
        name: "Blue and white Nike ",
        description: "Best quality for the most expensive shoes, show off your wealth. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: "$ 129.99"
    },
    {
        id: 3,
        img: "./images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
        name: "Orange Nickle",
        description: "Cheap yet durable running shoes. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: "$ 10.99"
    },
    {
        id: 4,
        img: "./images/omar-prestwich-jLEGurepDco-unsplash.jpg",
        name: "K-SWISS*",
        description: "Fashion, running, jumping... These kicks were made for it all. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veritatis dignissimos praesentium facere eius exercitationem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde culpa sint, assumenda iste nobis? Inventore incidunt earum cum debitis quos et consequatur? Ipsa, maiores saepe? Laboriosam nostrum ullam consequatur porro magni perferendis odit iusto? Esse, eligendi. Voluptatibus laboriosam fuga nostrum perferendis itaque quibusdam, ea sapiente nemo. Nemo, assumenda molestiae.",
        price: "$ 30.99"
    },
]
var productSection = document.getElementById('products');
function updateProducts(){
    console.log('Functoning')
    var productContainer = '';
    var i=0;
    for (i in Products){
        productContainer = productContainer + `<div id="product">
                                                    <div id="productimg">
                                                        <img src="${Products[i].img}" alt="">
                                                    </div>
                                                    <div id="productdescription">
                                                        <h2 id="title">${Products[i].name}</h2>
                                                        <span id="price">${Products[i].price}</span>
                                                    </div> 
                                                    <hr>
                                                    <div id="details">
                                                        <button id="conBtn" class="conBtn" onclick="view(${Products[i].id})">View</button>
                                                        <button id="addcart" class="conBtn">Add To cart</button>
                                                    </div>
                                                </div>`
                                                console.log(i, Products[i].img)
    }
    productSection.innerHTML = productContainer;
    // console.log(productSection.innerHTML)
}
updateProducts()