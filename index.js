const angles = document.querySelectorAll(".angle-of-triangle")
const isTriangleButton = document.querySelector("#is-triangle-button")
const showOutput = document.querySelector("#show-output")

function calculateSumOfAngles(){
  let sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
      if(sum===180){
          showOutput.innerText = ("Yay! The angles form a triangle");
      }else{
          showOutput.innerText = ("Oh Oh! The angles don't form a triangle");
      }

    }

function isTriangle(){
    if(angles[0].value&&angles[1].value&&angles[2].value){
        calculateSumOfAngles()
}else{
    showOutput.innerText = ("Please fill all the fields");
}
}

isTriangleButton.addEventListener("click", isTriangle)