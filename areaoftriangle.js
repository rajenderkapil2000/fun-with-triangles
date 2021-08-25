const inputs = document.querySelectorAll(".inputs")
const checkButton = document.querySelector("#check-button")
const showoutput = document.querySelector("#show-output")

function calculateSum(){
    const sum = (Number(inputs[0].value) * Number(inputs[1].value)) / 2;
    return sum;
} 


function calculateArea(){
    showoutput.innerText = "The length of the hypotenuse is "  + calculateSum() + " cm" ;
}

checkButton.addEventListener("click", calculateArea);