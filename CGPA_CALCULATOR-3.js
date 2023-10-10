if(screen.width <= 645){        for(y=0; y<help_images.length; y++){    help_images[y].setAttribute("src",help_images_link_sm[y])
}}
 if(screen.width > 645){
   for(y=0; y<help_images.length; y++){      help_images[y].setAttribute("src",help_images_link[y])
}
}
window.addEventListener("resize",function(){
    credits = Array.prototype.slice.call(document.querySelectorAll(".credit-div-input"))
    credits.forEach(Node=>{
   
       if (Node.style.borderLeft=="1px solid rgb(194, 190, 190)" && window.innerWidth >= 645){
    
          Node.style.borderLeft= "1px solid white"
       }
       else if(screen.width <= 645 &&    Node.style.borderLeft== "1px solid white"){
          Node.style.borderLeft ="1px solid rgb(194, 190, 190)"
        
       }
    })
   
    for(y=0; y<help_images.length; y++){
       help_images= document.querySelectorAll(".steps img")
       if(window.innerWidth < 645){           help_images[y].setAttribute("src",help_images_link_sm[y])
    }
    else if(window.innerWidth > 645){
       help_images[y].setAttribute("src",help_images_link[y])
     
    }
 }
 /*This changes the border color of an input field upon click after input error*/
 credit_inputs.forEach(Node => {
 
    Node.addEventListener("click", function(){   if (Node.style.border == "2px solid red" && screen.width <= 645){
 Node.style.border= "none"
 Node.style.borderLeft= "1px solid rgb(194, 190, 190)"
 const bar = document.querySelector(".bar");
 
 
 
    }  
     
  else if (Node.style.border == "2px solid red" && screen.width >= 645){
   Node.style.border= "2px solid white"
  }  
  } 
   
    )
           
 }) 
      Array.prototype.slice.call(document.querySelectorAll(".credit-only "))
 
 
      
      
      grade_inputs.forEach(Node => {
    
          Node.addEventListener("click", function(){
            if (Node.style.border == "2px solid red" && screen.width <= 645){
               Node.style.border= "2px solid white"
            
           
               
               
                   }  
                    
                 else if (Node.style.border == "2px solid red" && screen.width >= 645){
                  Node.style.border= "2px solid white"
                 }  
          }
          )
            })
                 
 ;
 
 window.addEventListener("resize",function(){
  

   if (window.innerWidth > 780){
    for(y=0; y<document.querySelectorAll(".guide-p").length; y++){
       document.querySelectorAll(".guide-p")[y].classList.add('hide')
    }}})
 
 
 })
 grade_inputs =document.querySelectorAll(".credit-selection")
 credit_inputs= document.querySelectorAll(".credit-div-input")
 bar = document.querySelector(".bar");
 const percentage = document.querySelector(".percentage").textContent;
 bar.style.width = percentage + "%";
 
 credit_inputs.forEach(Node => {
 
     Node.addEventListener("click", function(){   if (Node.style.border == "2px solid red" && screen.width <= 645){
 Node.style.border= "2px solid white"
 Node.style.borderLeft= "1px solid rgb(194, 190, 190)"
 bar = document.querySelector(".bar");
 
 
 
     }  
      
   else if (Node.style.border == "2px solid red" && screen.width >= 645){
    Node.style.border= "2px solid white"
   }  
   } 
    
     )
            
  }) 
       Array.prototype.slice.call(document.querySelectorAll(".credit-only "))
 
 
       
       
       grade_inputs.forEach(Node => {
     
           Node.addEventListener("click", function(){
             if (Node.style.border == "2px solid red" && screen.width <= 645){
                Node.style.border= "2px solid white"
                bar = document.querySelector(".bar");
            
                
                
                    }  
                     
                  else if (Node.style.border == "2px solid red" && screen.width >= 645){
                   Node.style.border= "2px solid white"
                  }  
           }
           )
             })
     /*The code to change the border color of an input field upon click ends here*/             
 ;
 
    credits = Array.prototype.slice.call(document.querySelectorAll(".credit-div-input"))
    credits.forEach(Node=>{
       if (Node.style.borderLeft=="1px solid rgb(194, 190, 190)" && screen.width >= 645){
    
          Node.style.borderLeft= "1px solid white"
       }
       else if(screen.width <= 645 &&    Node.style.borderLeft== "1px solid white"){
          Node.style.borderLeft ="1px solid rgb(194, 190, 190)"
       }
    })
 