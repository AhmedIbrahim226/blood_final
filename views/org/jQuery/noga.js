$(document).ready(function (){
   $("#hide").click(function(){
      $("p").hide(); 
       
   });
    
    $(".show").click(function(){
        $("p").show();
        
    });
    $(".toggle").click(function(){
                $("p").toggle(); 
            });
    $(".tap").dblclick(function(){
                $(".down-top").slideDown(); 
            });
    
});