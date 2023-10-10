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