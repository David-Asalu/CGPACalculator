function marks_glow(val){
  
    num= Number(val)
   var x_marks=  ".x-"+num
   
   XMarks_Array=Array.prototype.slice.call(document.querySelectorAll(x_marks))
   XMarks_Array.forEach((element)=>{
 
  element.style.color="rgb(246, 42, 42"
 
   })
 }