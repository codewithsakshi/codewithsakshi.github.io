 const boxes = document.querySelectorAll('.box')
 
 window.addEventListener('scroll', checkBoxes)
 checkBoxes()

 function checkBoxes() {
//  console.log("Function checkboxes called")    

 const triggerBottom = window.innerHeight/5*4;

 for(let i =0; i < boxes.length; i++){
     const boxTop = boxes[i].getBoundingClientRect().top
    //  console.log(boxTop)
     if(boxTop < triggerBottom) {
         boxes[i].classList.add('show')
     } else {
         boxes[i].classList.remove('show')
     }
 }
}

console.log(boxes)


