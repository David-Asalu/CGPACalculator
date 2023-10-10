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
 
 