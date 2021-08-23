const input = document.querySelectorAll(".input")
const calculateButton = document.querySelector("#calculate-button")
const showoutput = document.querySelector("#show-output")

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(input[0].value), Number(input[1].value));
    const lengthOfTheHypotenuse = Math.sqrt(sumOfSquares);

    showoutput.innerText = "The length of hypotenuse is " + lengthOfTheHypotenuse + " cm";
}


calculateButton.addEventListener("click", calculateHypotenuse)