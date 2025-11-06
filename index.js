'use strict';


//horizontal scroll for products 
const lscroll = new LocomotiveScroll({
    el: document.querySelector('#products'),
    smooth: true,
    direction: 'horizontal'
});

lscroll.on('scroll', (obj) => {
    for (const key of Object.keys(obj.currentElements)) {
        if ( obj.currentElements[key].el.classList.contains('product-img') ) {
            let progress = obj.currentElements[key].progress;
            const scaleVal = progress < 0.5 ? clamp(map(progress,0,0.5,0.2,1),0.2,1) : clamp(map(progress,0.5,1,1,0.2),0.2,1);
            obj.currentElements[key].el.parentNode.style.transform = `scale(${scaleVal})`
        }
    }
});
lscroll.update();


$(document).ready(function () {
  $("#contact-button").on("click", function (_0x5b861b) {
    _0x5b861b.preventDefault();
  });
  fetchProducts();
});

const fetchProducts = async function () {
  fetch("https://de9ff17a-6be2-40ef-a1f4-a643f153fc26.mock.pstmn.io/products").then(response => response.json()).then(data => {
    const productDiv = $("#products");
    data.forEach(obj => {
      productDiv.append(`<div class='product-div'><img class='product-img' src='${obj.image}'>  <h3> ${obj.name} + " </h3> <p> ${obj.price} </p> </div>`);
    });
    _0x3b2484.slick({
      'slidesToShow': 0x3,
      'infinite': true,
      'autoplay': true,
      'autoplaySpeed': 0x3e8,
      'arrows': false
    });
  });
};