var header = document.getElementById('header');
var _product = document.getElementById('productSec');
var otherProducts = document.getElementById('otherProducts')
var aboutUs = document.getElementById('aboutUs');
var contacttUs = document.getElementById('contactUs');
var popup = document.getElementById('popup');
var button = document.getElementById('conBtn');
var _close = document.getElementById('close');
var links = document.getElementById('links');
function displayLink(){
    if (links.style.display == 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
}
function view(){
    popup.style.display = 'block';
}
function Close(){
    popup.style.display = 'none';
}
function home(){
    console.log('working');
    header.style.display = 'block';
    _product.style.display = 'block';
    otherProducts.style.display = 'none'
    aboutUs.style.display = 'none';
    contacttUs.style.display = 'none';
}
function about(){
    console.log('working');
    header.style.display = 'none';
    _product.style.display = 'none';
    aboutUs.style.display = 'block';
    contacttUs.style.display = 'none';
}
function product(){
    console.log('working');
    header.style.display = 'none';
    _product.style.paddingTop = '10vh';
    _product.style.display = 'block';
    otherProducts.style.display = 'flex'
    aboutUs.style.display = 'none';
    contacttUs.style.display = 'none';
}
function contactUs(){
    console.log('working');
    header.style.display = 'none';
    _product.style.display = 'none';
    aboutUs.style.display = 'none';
    contacttUs.style.display = 'block';
}