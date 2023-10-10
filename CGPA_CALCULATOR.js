selected_country=document.querySelector("#country").value
gpas_array=[]
semesters=0
semesters_no = 1;
semestersarray=["1"]
help_images_link_sm=["Step1-SM.jpg","Step2-SM.jpg","Step3-SM.jpg","Step4-SM.jpg"]
help_images_link=["tip1.jpg","Step-2.jpg","step-3.jpg","step-4.jpg"]
help_images= document.querySelectorAll(".steps img")
adder_length=document.querySelectorAll(".adder").length
Array.prototype.slice.call(document.querySelectorAll(".credit-only "))
bar = document.querySelector(".bar")

/* The following codes are for the functionality of the navbar icon*/
document.addEventListener('contextmenu', function(event) {
   event.preventDefault();
   // Optionally, display a message or take some other action
 });







/*code ends here*/ 
/* Code to change images based on window/screen size      */
                
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


/* funcion to be called upon country selection which includes the deletion of all calculated values 
 and changing of options
*/
 // Call setTheme() on page load
function setTheme() {
   const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
   if (isDarkMode) {
     document.body.classList.add('dark');
   } else {
     document.body.classList.remove('dark');
   }
 }


 window.onload = setTheme;
function toggleNavbar() {
   var navbarIcon = document.querySelector('.navbar-icon');
   navbarIcon.classList.toggle('close');
   for(y=0; y<document.querySelectorAll(".none").length; y++)
   document.querySelectorAll(".none")[y].classList.toggle('show');
 }
 
function countryselect() {
   selected_country=document.querySelector("#country").value
   if(   document.querySelector(".white-bg").style.height < 700){
   document.querySelector(".white-bg").style.height="fit-content"
}
   var wholecalculator = document.querySelector(".first-calculator");
if (document.body.contains(wholecalculator)){
 ;
}
      var other_funcs = document.querySelector(".other-funcs");

      other_funcs.style.display = "block";

for(y=0; y<document.querySelectorAll(".credit-selection").length; y++ ){
if(selected_country == "USA" || selected_country == 'Canada'){

   document.querySelectorAll(".credit-selection")[y].innerHTML=  '                 <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option>'
}
else if(selected_country == "Nigeria")
{
   document.querySelectorAll(".credit-selection")[y].innerHTML=         '    <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option> '
}


}
}

function marks_glow(val){
  
   num= Number(val)
  var x_marks=  ".x-"+num
  
  XMarks_Array=Array.prototype.slice.call(document.querySelectorAll(x_marks))
  XMarks_Array.forEach((element)=>{

 element.style.color="rgb(246, 42, 42"

  })
}
function unglow(val){
  
   num= Number(val)
  var x_marks=  ".x-"+num
  
  XMarks_Array=Array.prototype.slice.call(document.querySelectorAll(x_marks))
  XMarks_Array.forEach((element)=>{

 element.style.color="rgb(164, 164, 164)"

  })
}

X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
x_marks = document.querySelectorAll(".x-mark")
x_marks.forEach(Node => {
    Node.addEventListener("click", function(){
      X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
      Node.style.border= "2px solid white"
y = X_marks.indexOf(Node)
x=Node.getAttribute("data")

document.querySelectorAll(".flex-four")[y].remove()

Node.remove()


})
Node.addEventListener("mouseover", function(){
   Node.style.color="rgb(246, 42, 42"
})
Node.addEventListener("mouseout", function(){
   Node.style.color="rgb(164, 164, 164)"
})
   
      })
       
function change_colour(val){
val.style.color="black"
   }






function gpa_array(val){
   var CreditValues =   document.querySelectorAll(".credit");


   var creditarray = []
   var gradearray = []
   var score_array=[]
   var credit_input = document.querySelectorAll(".credit-div-input")
   var incorrect_input = 0;
   var u = ".credit-selection-"+val
   input = ".credit-div-input-"+val
   var credit_input= document.querySelectorAll(input);
   var grade_selected= document.querySelectorAll(u)
    var x = document.querySelector(".credit-selection-top")
    var selected_cgpa = x.options[x.selectedIndex].text 
   if (selected_cgpa == "4.0"){



    for (y=0; y<credit_input.length ; y++){

  
      
      
if(credit_input[y].value == ""  ){
   creditarray.push(Number("0"))


}

else{
   creditarray.push(Number([credit_input[y].value]))
}
      if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
       gradearray.push(["0"])
       const grade_sum = gradearray.reduce(function(a,b ){return a+b});
      }
      else{
gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value]-1)

}


   

const sum = creditarray.reduce(function(a,b ){return a+b});
total_credit= sum*4
if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){

   incorrect_input++
   /*var error="Please input a credit"

   credit_input[y].style.border="2px solid red"
   credit_input[y].scrollIntoView()*/
}
else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
  /* alert("Please select a grade")*/
   incorrect_input++

}
else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){

   var score = creditarray[y] * gradearray[y]
   score=  Number(score.toFixed(5))
   score_array.push(score)


}
if (incorrect_input == 0 && y == credit_input.length-1 ){
   var total_score = score_array.reduce(function(a,b ){return a+b});
   var gpa = total_score/sum

   var gpa = Number(total_score/sum);
   var gpa_string= gpa.toString();
   var gpa_approx = gpa_string.slice(0,4)
   gpas_array[val]= Number(gpa_approx)

}
}


}
   else if (selected_cgpa == "5.0"){
      
      for (y=0; y < credit_input.length; y++){
     
         if(credit_input[y].value == ""  ){
            creditarray.push(Number("0"))
        
         
         }
         
         else{
            creditarray.push(Number([credit_input[y].value]))
         }
               if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
                gradearray.push(["0"])
                const grade_sum = gradearray.reduce(function(a,b ){return a+b});
               }
               else{
         gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value])
         
         }
         
         
            
         
         const sum = creditarray.reduce(function(a,b ){return a+b});
         total_credit= sum*5
         if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){
        
            incorrect_input++
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
          
            incorrect_input++
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){
           
            var score = creditarray[y] * gradearray[y]
            score=  Number(score.toFixed(5))
            score_array.push(score)

         
         }
         if (incorrect_input == 0 && y == credit_input.length-1 ){
            var total_score = score_array.reduce(function(a,b ){return a+b});
            var gpa = total_score/sum
        
            var gpa = Number(total_score/sum);
            var gpa_string= gpa.toString();
            var gpa_approx = gpa_string.slice(0,4)
        gpas_array[val]= Number(gpa_approx)
         }
   
}}
   
   
   
   
   
   
   
}
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

document.querySelectorAll(".flex-four")[y].remove()

Node.remove()

var val= (document.querySelectorAll(".calculator")[x].clientHeight);

 document.querySelector(".white-bg").style.height= new_whitebg_height + "px"
 document.querySelectorAll(".calculator")[x].style.height=  "fit-content"

})

      })

      }   

     

      /* function to remove div*/
function remove_div(val){
   ho= Number(val)
   var calculator=".flex-"+ho
   var calculator_divs = Array.prototype.slice.call(document.querySelector(calculator).children)
   last_div= calculator_divs[calculator_divs.length-1]
   last_div.parentNode.removeChild(last_div)
 
  val= Node.value

  var val= (document.querySelectorAll(".calculator")[ho].clientHeight);

 document.querySelectorAll(".calculator")[ho].style.height=  "fit-content"

 var CalculatorBodyHeight =(document.querySelector(".calculator-body").clientHeight);

 var x_div =".x-mark-div-"+ho
 var delete_icons= Array.prototype.slice.call(document.querySelector(x_div).children)
 last_icon= delete_icons[delete_icons.length-1]
 last_icon.parentNode.removeChild(last_icon)
 
}


function save_selected(selected){
 var selected_cgpa = selected.options[selected.selectedIndex].text

}
function calculate_gpa(val){
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
   var CreditValues =   document.querySelectorAll(".credit");

   selected_country=document.querySelector("#country").value
   var creditarray = []
   var gradearray = []
   var score_array=[]
   var credit_input = document.querySelectorAll(".credit-div-input")
   var incorrect_input = 0;
   var u = ".credit-selection-"+val
   input = ".credit-div-input-"+val
   var credit_input= document.querySelectorAll(input);
   var grade_selected= document.querySelectorAll(u)
    var x = document.querySelector(".credit-selection-top")
    var selected_cgpa = x.options[x.selectedIndex].text 
   if (selected_cgpa == "4.0"){



    for (y=0; y<credit_input.length ; y++){

  
      
      
if(credit_input[y].value == ""  ){
   creditarray.push(Number("0"))


}

else{
   creditarray.push(Number([credit_input[y].value]))
}
    if(selected_country == "Nigeria"){
      if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "0"  ){
       gradearray.push(["0"])
      
      }
      else {

         gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value]-1)

}

}  else if(selected_country == "USA" || selected_country == 'Canada'){
   if (grade_selected[y].options[grade_selected[y].selectedIndex].value == 5 ){
      gradearray.push([4])
    
     }
  else if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "0"  ){
   gradearray.push(["0"])
  
  } 
   else {

   gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value])

}
 

}
   

const sum = creditarray.reduce(function(a,b ){return a+b});
total_credit= sum*4
if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){
   span_array[y].style.display="block"
 
   credit_input[y].style.border="2px solid red"
   credit_input[y].scrollIntoView()
   incorrect_input++
}
else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){  
   grade_selected[y].style.border="2px solid red"
   grade_selected[y].scrollIntoView()
   incorrect_input++
}
else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){

   incorrect_input++
}
else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){

   var score = creditarray[y] * gradearray[y]
   score=  Number(score.toFixed(5))
   score_array.push(score)
   
         


}
if (incorrect_input == 0 && y == credit_input.length-1 ){
   var total_score = score_array.reduce(function(a,b ){return a+b});
   var gpa = total_score/sum
   var gpa = Number(total_score/sum);
   var gpa_string= gpa.toString();
   var gpa_approx = gpa_string.slice(0,4)
   gpa_approx= Number(gpa_approx)
   gpa_approx=gpa_approx.toFixed(2)
   document.querySelector(".gpa-value-"+val).value = gpa_approx
}
}



}
   else if (selected_cgpa == "5.0"){
     
      for (y=0; y < credit_input.length; y++){
     
         if(credit_input[y].value == ""  ){
            creditarray.push(Number("0"))
     
         
         }
         
         else{
            creditarray.push(Number([credit_input[y].value]))
         }
               if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
                gradearray.push(["0"])
                const grade_sum = gradearray.reduce(function(a,b ){return a+b});
               }
               else{
         gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value])
         
         }
         
         
            
         
         const sum = creditarray.reduce(function(a,b ){return a+b});
         total_credit= sum*5
         if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){
            span_array[y].style.display="block"
            credit_input[y].style.border="2px solid red"
            credit_input[y].scrollIntoView()
            incorrect_input++
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
       
            grade_selected[y].style.border="2px solid red"
            grade_selected[y].scrollIntoView()
            incorrect_input++
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){
           
            var score = creditarray[y] * gradearray[y]
            score=  Number(score.toFixed(5))
            score_array.push(score)
         
         
         
         }
         if (incorrect_input == 0 && y == credit_input.length-1 ){
            var total_score = score_array.reduce(function(a,b ){return a+b});
            var gpa = total_score/sum
            var gpa = Number(total_score/sum);
            var gpa_string= gpa.toString();
            var gpa_approx = gpa_string.slice(0,4)
            gpa_approx= Number(gpa_approx)
            gpa_approx=gpa_approx.toFixed(2)
            document.querySelector(".gpa-value-"+val).value = gpa_approx
         }
   
}}
   
   
   
   
   
   
      else{
         alert("Please choose a scale")
                  document.querySelector(".scale").scrollIntoView()
      }
}
/* function to add new semester*/

function add_semester(){  
   selected_country=document.querySelector("#country").value
  semesters++
  semesters_no++
   added_semester = document.createElement("div");
   if(selected_country == "USA" || selected_country == 'Canada'){
    
  added_semester.innerHTML='     <div class="whole-calculator-'+semesters+' first-calculator"> <div class="semester"> <h3 >Semester </h3> <div> <i class="fa-regular fa-circle-xmark  x-semester" data-2="'+semesters+'" data="'+semesters+'" onclick="removesemester(this.getAttribute(\'data\')); correct_values(this.getAttribute(\'data-2\'))"onmouseover="marks_glow(this.getAttribute(\'data\'))" onmouseout="unglow(this.getAttribute(\'data\'))" ></i></div> </div> <div class="calculator float  calculator-'+semesters+'"> <div class="flex-three top"> <div > <h1>Course name (optional)</h1> </div> <div> <h1>  Course Credit | Unit  </h1> </div> <div> <h1>Grade </h1> </div> </div> <div class="flex-'+semesters+' "> <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)">  <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option></select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div>  <span class="span-'+semesters+' span"> Input must be digit</span><div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" > <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div><span class="span-'+semesters+' span"> Input must be digit</span> <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" >  <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option></select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div><span class="span-'+semesters+' span"> Input must be digit</span> <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" > <option class="selected"  value="null" disabled selected>Grade</option>           <option value="5.0">A+ </option> <option value="4.0">A </option> <option value="3.7">A-</option> <option value="3.3">B+</option> <option value="3.0">B</option>  <option value="2.7">B- </option> <option value="2.3">C+</option>  <option value="2.0">C </option><option value="1.7">C-</option> <option value="1.3">D+ </option><option value="1.0">D </option> <option value="0">F </option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div><span class="span-'+semesters+' span"> Input must be digit</span> </div> <div class="flex-three"> <button class="add-course adder add1"  value="'+semesters+'" onclick=add_div(this.value)> Add a course </button> <!--     <button class="remove-course" onclick= remove_div(this.value) value="'+semesters+'"> Remove course </button>  --> </div> <div class="flex-three"> <button class="calc-button" value="'+semesters+'" onclick= calculate_gpa(this.value)  > Calculate GPA <i class="fa-solid fa-calculator"></i> </button>  </div> </div> <div class="x-mark-div float x-mark-div-'+semesters+'"> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> </div> <div class="gpa-value-div"> <label class="label-gpa" for="gpa-value-div"> Semester <span class="gpa-value-span">'+semesters_no+'</span> GPA:</label> <input class="gpa-value gpa-value-'+semesters+'" name="gpa-value-div" disabled > </div></div> '

}
else if(selected_country == "Nigeria")
{
   added_semester.innerHTML='     <div class="whole-calculator-'+semesters+' first-calculator"> <div class="semester"> <h3 >Semester <span class="semester-value">'+semesters_no+'</span></h3> <div> <i class="fa-regular fa-circle-xmark  x-semester" data-2="'+semesters+'" data="'+semesters+'" onclick="removesemester(this.getAttribute(\'data\')); correct_values(this.getAttribute(\'data-2\'))"onmouseover="marks_glow(this.getAttribute(\'data\'))" onmouseout="unglow(this.getAttribute(\'data\'))" ></i></div> </div> <div class="calculator float  calculator-'+semesters+'"> <div class="flex-three top"> <div > <h1>Course name (optional)</h1> </div> <div> <h1>  Course Credit | Unit  </h1> </div> <div> <h1>Grade </h1> </div> </div> <div class="flex-'+semesters+' "><div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)">   <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div> <span class="span-'+semesters+' span"> Input must be digit</span> <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" >  <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div> <span class="span-'+semesters+' span"> Input must be digit</span><div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" >   <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div><span class="span-'+semesters+' span"> Input must be digit</span> <div class="flex-four"> <div class="name-div"> <input class="names-input" type="text"   placeholder="Course name" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> <div class="grade-div"> <select name="grades" class="credit-selection credit-selection-'+semesters+'" onchange="change_colour(this)" >  <option class="selected"  value="null" disabled selected>Grade</option>  <option value="5">A</option>  <option value="4">B</option>  <option value="3">C</option> <option value="2">D</option> <option value="1">E</option> <option value="0">F</option> </select> </div> <div class="credit-div"> <input class="credit-div-input credit-div-input-'+semesters+' " type="number" min ="1"  placeholder="Credits" onclick="gpa_array('+semesters+')" onkeyup="gpa_array('+semesters+')"> </div> </div><span class="span-'+semesters+' span"> Input must be digit</span>  </div><div class="flex-three"> <button class="add-course adder add1"  value="'+semesters+'" onclick=add_div(this.value)> Add a course </button> <!--     <button class="remove-course" onclick= remove_div(this.value) value="'+semesters+'"> Remove course </button>  --> </div> <div class="flex-three"> <button class="calc-button" value="'+semesters+'" onclick= calculate_gpa(this.value)  > Calculate GPA <i class="fa-solid fa-calculator"></i> </button>  </div> </div> <div class="x-mark-div float x-mark-div-'+semesters+'"> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> <div> <i class="fa-regular fa-circle-xmark x-mark x-'+semesters+'" data="'+semesters+'" ></i></div> </div> <div class="gpa-value-div"> <label class="label-gpa" for="gpa-value-div"> Semester <span class="gpa-value-span">'+semesters_no+'</span> GPA:</label> <input class="gpa-value gpa-value-'+semesters+'" name="gpa-value-div" disabled > </div></div> '  
}        
   document.querySelector(".contents").appendChild(added_semester)
   var val= (document.querySelector(".white-bg").clientHeight);
 var new_calculator_height= val + 546
 added_semester.style.display="block"
document.querySelector(".white-bg").style.height=  "fit-content"
credit_inputs= document.querySelectorAll(".credit-div-input")
credit_inputs.forEach(Node => {
   Node.addEventListener("click", function(){
Node.style.border= "none"
Node.style.borderLeft= "1px solid rgb(194, 190, 190)"


   })})
  
   X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
   x_marks = document.querySelectorAll(".x-mark")
   x_marks.forEach(Node => {
       Node.addEventListener("click", function(){
         X_marks= Array.prototype.slice.call(document.querySelectorAll(".x-mark"))
         Node.style.border= "2px solid white"
   y = X_marks.indexOf(Node)
   x=Node.getAttribute("data")

   document.querySelectorAll(".flex-four")[y].remove()

   Node.remove()
   
   var val= (document.querySelectorAll(".calculator")[x].clientHeight);
   var new_calculator_height= val - 60.8
   
   var whitebg_height =  (document.querySelector(".white-bg").clientHeight);
   var new_whitebg_height= whitebg_height - 91.6;
   document.querySelector(".white-bg").style.height= "fit-content"
   document.querySelectorAll(".calculator")[x].style.height= new_calculator_height + "px"
   
   var CalculatorBodyHeight =(document.querySelector(".calculator-body").clientHeight);
   var new_CalculatorBodyHeight= CalculatorBodyHeight - 61.6
   document.querySelector(".calculator-body").style.height= new_CalculatorBodyHeight + "px"
   marks_glow(val)
   })
   
   Node.addEventListener("mouseover", function(){
      Node.style.color="rgb(246, 42, 42"
   })
   Node.addEventListener("mouseout", function(){
      Node.style.color="rgb(164, 164, 164)"
   })   })
          
}

   function removesemester(val){
  
      number= Number(val)
    
      calculator_div= ".whole-calculator-"+number
      document.querySelector(calculator_div).remove()
     semesters--
     semesters_no--
     var val= (document.querySelector(".white-bg").clientHeight);
 
   }   
   function correct_values(val){

      var number = Number(val)
      var nodeList=    document.querySelectorAll(".semester-value")
      var elementArray= Array.from(nodeList)
      var selectedElements = elementArray.slice(number) 
      selectedElements.forEach((element) =>{
         textContent = element.textContent
        var numbers= Number(textContent)-1
         element.textContent=numbers
         element.setAttribute("data","num")
      }

      )
      var nodeList_2=    document.querySelectorAll(".gpa-value-span")
      var elementArray= Array.from(nodeList_2)
      
      var selectedElements = elementArray.slice(number) 
      selectedElements.forEach((element) =>{
         textContent = element.textContent
        var numbers= Number(textContent)-1
         element.textContent=numbers
         element.setAttribute("data","num")
      }

      )
      var nodeList_3=    document.querySelectorAll(".x-semester")
      var elementsArray= Array.from(nodeList_3)
      var selectedElement = elementsArray.slice(number)
      selectedElement.forEach((element) =>{
      num=element.getAttribute("data-2")
      new_num= Number(num)-1
         element.setAttribute("data-2",new_num)
      
      })

   }
      function   redogpa(){
                       for(y=0; y<semesters_no; y++){
                           gpa_array(y)

                       }
                       document.querySelector(".cgpa-value").value = ""         
         }
         
   
   
   
     


         function calculate_cgpa(){
            grade_inputs =document.querySelectorAll(".credit-selection")
            var credit_inputs= document.querySelectorAll(".credit-div-input")
            credit_inputs=[...credit_inputs]
         
             spans=".span"
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
               spans_array[y].style.display="none"
                  
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
            var CreditValues =   document.querySelectorAll(".credit");
            spans=".span"
            var spans_array= document.querySelectorAll(spans)
         
            var creditarray = []
            var gradearray = []
            var score_array=[]
            var credit_input = document.querySelectorAll(".credit-div-input")
            var incorrect_input = 0;
            var u = ".credit-selection"
           
        
            var grade_selected= document.querySelectorAll(u)
             var x = document.querySelector(".credit-selection-top")
             var selected_cgpa = x.options[x.selectedIndex].text 
            if (selected_cgpa == "4.0"){
         
    
             for (y=0; y<credit_input.length ; y++){
         
           
               
               if(credit_input[y].value == ""  ){
                  creditarray.push(Number("0"))
           
               
               }
               
               else{
                  creditarray.push(Number([credit_input[y].value]))
               }
               
               if(selected_country == "Nigeria"){
                  if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "0"  ){
                   gradearray.push(["0"])
                  
                  }
                  else {
            
                     gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value]-1)
            
            }
            
            }  else if(selected_country == "USA" || selected_country == 'Canada'){
               if (grade_selected[y].options[grade_selected[y].selectedIndex].value == 5 ){
                  gradearray.push([4])
          
                 }
              else if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "0"  ){
               gradearray.push(["0"])
              
              } 
               else {
            
               gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value])
            
            }
             
            
            }
    
         
            
         
         const sum = creditarray.reduce(function(a,b ){return a+b});
         total_credit= sum*4
         if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){
         
            incorrect_input++
         alert(y)
            spans_array[y].style.display="block"
            credit_input[y].style.border="2px solid red"
            credit_input[y].scrollIntoView()
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
            grade_selected[y].style.border="2px solid red"
            grade_selected[y].scrollIntoView()
            incorrect_input++
         }
         else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){
           
            var score = creditarray[y] * gradearray[y]
            score=  Number(score.toFixed(5))
            score_array.push(score)
         
         
         
         }
         if (incorrect_input == 0 && y == credit_input.length-1 ){
            var total_score = score_array.reduce(function(a,b ){return a+b});

            var gpa = total_score/sum
    
            var gpa = Number(total_score/sum);
            var gpa_string= gpa.toString();
            var gpa_approx = gpa_string.slice(0,4) ;
            gpa_approx= Number(gpa_approx)
            gpa_approx=gpa_approx.toFixed(2)
           
           var percentage=(gpa_approx/4)*100
           if (percentage < 50 ){
            bar.style.backgroundColor ="#FFC871"
      
         }

    

         if (percentage>=90){
            bar.style.backgroundColor ="#54B725"   
         }
         else if (percentage>= 80 && percentage < 90 ){
         
            bar.style.backgroundColor ="#B7B400"
         }
         else if (percentage>= 60 && percentage < 80 ){
            bar.style.backgroundColor ="#FFC871"
         }
      
      else if (percentage >= 50&& percentage < 60  ){
         bar.style.backgroundColor ="#fb956d"
      }
    else if(percentage<50){
      bar.style.backgroundColor ="#f11b1b"
    }
         bar.style.width = percentage + "%";
                 document.querySelector(".percentage").textContent = gpa_approx
      }
         
         
   } 
         
         }
            else if (selected_cgpa == "5.0"){
              
               for (y=0; y < credit_input.length; y++){
              
                  if(credit_input[y].value == ""  ){
                     creditarray.push(Number("0"))
              
                  
                  }
                  
                  else{
                     creditarray.push(Number([credit_input[y].value]))
                  }
                        if (grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
                         gradearray.push(["0"])
                         const grade_sum = gradearray.reduce(function(a,b ){return a+b});
                        }
                        else{
                  gradearray.push([grade_selected[y].options[grade_selected[y].selectedIndex].value])
                  
                  }
                  
                  
                     
                  
                  const sum = creditarray.reduce(function(a,b ){return a+b});
                  total_credit= sum*5
                  if(credit_input[y].value == "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value != "null" ){
                     spans_array[y].style.display="block"
                     credit_input[y].style.border="2px solid red"
                     credit_input[y].scrollIntoView()
                     incorrect_input++
                  }
                  else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value == "null" ){
                 
                     grade_selected[y].style.border="2px solid red"
                     grade_selected[y].scrollIntoView()
                     incorrect_input++
                  }
                  else if(credit_input[y].value !== "" &&  grade_selected[y].options[grade_selected[y].selectedIndex].value !== "null"){
                    
                     var score = creditarray[y] * gradearray[y]
                     score=  Number(score.toFixed(5))
                     score_array.push(score)
                  
                  
                  
                  }
                  else{}
                  if (incorrect_input == 0 && y == credit_input.length-1 ){
                     var total_score = score_array.reduce(function(a,b ){return a+b});
                     var gpa = total_score/sum
                     var gpa = Number(total_score/sum);
                     var gpa_string= gpa.toString();
                     var gpa_approx = gpa_string.slice(0,4)
                     gpa_approx= Number(gpa_approx)
                     gpa_approx=gpa_approx.toFixed(2)
                     percentage= (gpa_approx/5)*100 +1 
                     if (percentage < 50 ){
                        bar.style.backgroundColor ="#FFC871"
                  
                     }

                
           
                     if (percentage>=90){
                        bar.style.backgroundColor ="#54B725"   
                     }
                     else if (percentage>= 80 && percentage < 90 ){
                      
                        bar.style.backgroundColor ="#B7B400"
                     }
                     else if (percentage>= 60 && percentage < 80 ){
                        bar.style.backgroundColor ="#FFC871"
                     }
                  
                  else if (percentage >= 50&& percentage < 60  ){
                     bar.style.backgroundColor ="#fb956d"
                  }
                else if(percentage<50){
                  bar.style.backgroundColor ="#f11b1b"
                }
                  }
                 
                   
                     bar.style.width = percentage + "%";
                     document.querySelector(".percentage").textContent = gpa_approx 
         }}
            
            
            
            
            
            
               else{
                  alert("Please choose a scale")
                  document.querySelector(".scale").scrollIntoView()
               }
            }
         