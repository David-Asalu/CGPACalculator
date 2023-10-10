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
document.querySelector(".dropdown-div").addEventListener("mouseover", function(){
  document.querySelector(".triangle").classList.toggle("triangle-change")
  document.querySelector(".navbar-dropdown").style.display='block'
   
}
)
document.querySelector(".dropdown-div").addEventListener("mouseout", function(){
   document.querySelector(".triangle").classList.toggle("triangle-change")
   document.querySelector(".navbar-dropdown").style.display='none'
   
}

)
document.querySelector(".navbar-dropdown").addEventListener("mouseover", function(){
  document.querySelector(".navbar-dropdown").style.display='block'
})
document.querySelector(".navbar-dropdown").addEventListener("mouseout", function(){
  document.querySelector(".navbar-dropdown").style.display='none'
})
/* The following codes are for the functionality of the navbar icon
document.addEventListener('contextmenu', function(event) {
   event.preventDefault();
   // Optionally, display a message or take some other action
 });



*/

