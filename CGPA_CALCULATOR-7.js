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
 spans=".span"
 var spans_array= document.querySelectorAll(spans)
 spans_array[y].remove()
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
        