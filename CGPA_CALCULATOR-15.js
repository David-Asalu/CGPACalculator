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