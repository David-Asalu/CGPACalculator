function add_div(val){
    grade_inputs =document.querySelectorAll(".credit-selection")
   var credit_inputs= document.querySelectorAll(".credit-div-input")
   credit_inputs=[...credit_inputs]
    span=".span-"+val
    spans=".span"
    var span_array= document.querySelectorAll(span)
    var spans_array= document.querySelectorAll(spans)
    credit_inputs.forEach(Node => {
 
 
       Node.addEventListener("click", function(){   if ( screen.width <= 645){
    Node.style.border= "none"
    Node.style.borderLeft= "1px solid rgb(194, 190, 190)"
     bar = document.querySelector(".bar");
     var y = credit_inputs.indexOf(Node)
 
 spans_array[y].style.display="none"
 
       }  
        
     else if (  screen.width >= 645){
      Node.style.border= "1px solid white"
      var y = credit_inputs.indexOf(Node)
      span_array[y].style.display="none"
         
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
 
   
    selected_country=document.querySelector("#country").value
 
 var h1= Number(val)
    u = ".flex-"+h1
  var  added_div= document.createElement("div");
   var added_x_mark= document.createElement("div");
   added_x_mark.innerHTML=    ' <i class="fa-regular fa-circle-xmark x-mark x-'+h1+'" data="'+h1+'" ></i> '
   var x_div= ".x-mark-div-"+h1
 
     if(screen.width>645){
      var val= (document.querySelector(".calculator-"+h1).clientHeight);
       var new_calculator_height= val + 60.5
       document.querySelector(".calculator-"+h1).style.height=  "fit-content"
      var whitebg_height =  (document.querySelector(".white-bg").clientHeight);
      var new_whitebg_height= whitebg_height + 65;
      document.querySelector(".white-bg").style.height= "fit-content"
    }
    else{
       var val= (document.querySelector(".calculator-"+h1).clientHeight);
       document.querySelector(".calculator-"+h1).style.height= "fit-content"
      var whitebg_height =  (document.querySelector(".white-bg").clientHeight);
 
      document.querySelector(".white-bg").style.height=  "fit-content"   
    }
  document.querySelector(x_div).appendChild(added_x_mark)
     document.querySelector(u).appendChild(added_div)
 
     if(selected_country == "USA" || selected_country == 'Canada'){
 
       added_div.innerHTML= '    <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+h1+')" onkeyup="gpa_array('+h1+')"> </div><div class="grade-div">     <select class="credit-selection credit-selection-'+h1+' " name="cars" onchange="gpa_array('+h1+'); change_colour(this)" > <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option>        </select>     </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+h1+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+h1+')" onkeyup="gpa_array('+h1+')"> </div>  </div>     <span class="span-'+h1+' span"> Input must be digit</span>' 
    
    }
    else if(selected_country == "Nigeria")
 {
    added_div.innerHTML='    <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+h1+')" onkeyup="gpa_array('+val+')"> </div> <div class="grade-div"> <select class="credit-selection credit-selection-'+h1+' " name="cars" onchange="gpa_array('+h1+'); change_colour(this)">  <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option></select>     </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+h1+' " type="number" min ="1"  placeholder="Credit" onclick="gpa_array('+h1+')" onkeyup="gpa_array('+h1+')"> </div>     </div>  <span class="span-'+h1+' span"> Input must be digit</span>'  
 
 }
 
 
 
     
 
           X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
 x_marks = document.querySelectorAll(".x-mark")
 x_marks.forEach(Node => {
    Node.addEventListener("mouseover", function(){
    Node.style.color="rgb(246, 42, 42"
 })
 Node.addEventListener("mouseout", function(){
    Node.style.color="rgb(164, 164, 164)"
 })
     Node.addEventListener("click", function(){
       X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
       Node.style.border= "1px solid white"
 y = X_marks.indexOf(Node)
 x=Node.getAttribute("data")
 spans=".span"
 var spans_array= document.querySelectorAll(spans)
 spans_array[y].remove()

 document.querySelectorAll(".flex-four")[y].remove()
 
 Node.remove()
 
 var val= (document.querySelectorAll(".calculator")[x].clientHeight);
 
  document.querySelector(".white-bg").style.height= new_whitebg_height + "px"
  document.querySelectorAll(".calculator")[x].style.height=  "fit-content"
 
 })
 
       })
 
       }   
 
      