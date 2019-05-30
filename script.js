var cart = [];
var prices =[];

$(".purchase").click(function(){
        var totalPrice = 0;
        prices.forEach(function(item){
        totalPrice = totalPrice + Number(item);
        
        
    
        
         
     });
     
     console.log(totalPrice);
});

$(".newItem").click(function(){
    var itemImage = $(".itemImage").val();    
    var itemName = $(".itemName").val(); 
    var itemPrice = $(".itemPrice").val();

    $(".cart").append("<div class ='items'><p>" + itemName + "</p>" + "<p>"+ itemPrice+"</p>"+"<p><img src='" + itemImage + "'></p></div>");
    cart.push({itemImage, itemName, itemPrice});
    prices.push(itemPrice);
    
     $(".number").append( "<p>"+ (cart.length) +"</p>");
     

   
   //$(".total").text("Total:" + totalPrice);
   });
  
   
    console.log(cart);

