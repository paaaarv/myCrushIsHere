$(document).ready(function() {
    
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
                $("h1").fadeIn(2000); 
                }
            }
    })


    const updateHeading = function(){
        let name = $("#userName").val(); 
        let place = $("#place").val(); 
        if (name && place){
            localStorage.setItem("crushName", name); 
            localStorage.setItem("crushPlace", place);        
        }
    }

    if (localStorage.getItem('crushName') && localStorage.getItem('crushPlace')){
        $("h1").fadeIn(1200); 
        $("#main-img h1").text(`${localStorage.getItem('crushName')}'s crush is in ${localStorage.getItem("crushPlace")}`); 
    }
    else{
        $("#dialog").dialog("open"); 
    }



});