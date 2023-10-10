
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
 