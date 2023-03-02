// alert("hello World")
// document.querySelector(“h1”) = $(“h1”)=jQuery(“h1”)

// CDN= Content Delivery Network

// We can directly download jquery or we can just add CDN link


// Check ready 
// $(document).ready(function() {
// $(“h1”).css(“color”,”red”);
// });
// Or directly paste it just before including javascript



// $("h3").css("color","red")
// console.log($("h3").css("color"))

$("h3").addClass("big-title margin-50 ")//class1Name Class2Name

// $("h3").removeClass("big-title") 
// 1 attribute given means we r getting the valye and 2 attribute means we r setting the attribute.

// console.log($("h3").hasClass("margin-50"))



// Manupulating text using JQuery
$("h3").text("bye")

// innerHTML in Jquery is just HTML
// $("button").html("<em>HelloDuniya</em>")

//Manupulating Attribute using jQuery
console.log($("img").attr("src"));//getting attribute

$("img").attr("src", "https.png")
console.log($("img").attr("src"));


//Adding Event Listener to Jquery
$("h3").click(function(){
$("h3").css("color","purple")
})


$("h3").before("<button>Click For suprise Gift</button>")//before opening tag of h3
// .after -> after opening of h3
// .prepend ->before the content of h3
// .append ->after the content of h3

// $("button").on("click",function()
// {
//     $("h3").hide()
// })


$("button").on("click",function(){
    $("h3").toggle()
})

// .fadeOut()
// .fadeIn()
// .fadeToggle
//slideUp()           slideDown             slideToggle 
// .animate({opacity:0.5;})



//$("h3").slideUp().slideDown()>animate({opacity:0.5});