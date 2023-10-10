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
 else if(selected_country == "India"){
   document.querySelectorAll(".credit-selection")[y].innerHTML=   '              <option class="selected"  value="null" disabled selected>Grade</option>           <option value="10.0">A+ </option> <option value="9.0">A </option> <option value="8.0">B+</option> <option value="7.0">B</option> <option value="6.0">C+</option>  <option value="5.0">C </option> <option value="4.0">D+</option>  <option value="3.0">D </option><option value="2.0">E</option> <option value="1.3"> F</option>'
 }
 }
 }