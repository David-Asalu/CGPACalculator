window.addEventListener("resize",function(){
  

  if (window.innerWidth > 780){
   for(y=0; y<document.querySelectorAll(".guide-p").length; y++){
      document.querySelectorAll(".guide-p")[y].classList.add('hide')
   }}})

document.querySelector(".dropdown-div").addEventListener("mouseover", function(){
  if(window.innerWidth>780){
   document.querySelector(".triangle").classList.toggle("triangle-change")
   document.querySelector(".navbar-dropdown").style.display='block'
    
 }}
 )
 document.querySelector(".dropdown-div").addEventListener("mouseout", function(){
  if(window.innerWidth>780){
    document.querySelector(".triangle").classList.toggle("triangle-change")
    document.querySelector(".navbar-dropdown").style.display='none'
    
 }
}
 )
 document.querySelector(".navbar-dropdown").addEventListener("mouseover", function(){
  if(window.innerWidth>780){
   document.querySelector(".navbar-dropdown").style.display='block'
 }
})
 document.querySelector(".navbar-dropdown").addEventListener("mouseout", function(){ 
   if(window.innerWidth>780){
   document.querySelector(".navbar-dropdown").style.display='none'
 }})

 function toggleNavbar() {
  var navbarIcon = document.querySelector('.navbar-icon');
  navbarIcon.classList.toggle('close');
  for(y=0; y<document.querySelectorAll(".none").length; y++){
  document.querySelectorAll(".none")[y].classList.toggle('show');

}
for(y=0; y<document.querySelectorAll(".guide-p").length; y++){
  document.querySelectorAll(".guide-p")[y].classList.toggle('show')
}
}
