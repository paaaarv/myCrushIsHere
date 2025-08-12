
'use strict';


$(document).ready(function() {
    //create dialog jquery widget 
    $("#dialog").dialog({
        modal: true, 
        autoOpen: false, 
        width: 600, 
        height: 450,
        show:{
            effect: "fade",
            duration: 1200
        },
        hide: {
            effect: "fade",
            duration: 400
        },
        buttons: {
            "xoxo" :  function() {
                updateHeading(); 
                $(this).dialog("close");
                showDialog(); 
                }
            }
    })

    showDialog(); 
    fetchProducts(); 


});

    // show dialog function to check local storage or open dialog 
    const showDialog = function(){
          //check whether local storage has info, otherwise open dialog to get data 
        if (localStorage.getItem('crushName') && localStorage.getItem('crushPlace')){
        $("h1").fadeIn(2000); 
        $("#main-img h1").text(`💕 ${localStorage.getItem('crushName')}'s crush is in ${localStorage.getItem("crushPlace")} 💕`); 
    }
    else{
        $("#dialog").dialog("open"); 
    }

    }
  // update heading with new values and save to web storage 
    const updateHeading = function(){
        let name = $("#userName").val(); 
        let place = $("#place").val(); 
        if (name && place){
            localStorage.setItem("crushName", name); 
            localStorage.setItem("crushPlace", place);        
        }
    }

    //fetch data for products from JSON file 
    const fetchProducts = async function(){
        fetch("https://de9ff17a-6be2-40ef-a1f4-a643f153fc26.mock.pstmn.io/products").then(data => data.json())
            .then(products => {
                const $productsCarousel = $("#products"); 
                products.forEach(product => {
                    $productsCarousel.append(
                        `
                        <div>
                            <img src='${product.image}'> 
                            <h3> ${product.name} </h3> 
                            <p> $${product.price} </p>  
                        </div>
                        `
                    )
                })
           

        $productsCarousel.slick({
            slidesToShow: 3, 
            infinite: true, 
            arrows: true, 
        }); 
         });
    }