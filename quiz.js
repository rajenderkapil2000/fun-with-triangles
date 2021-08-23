const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit-button")
const outputScore = document.querySelector("#output-score")

const correctAnswers = ['90°', 'right angled'];

function calculateScore(){
let score = 0;
let index = 0;
const formResults = new FormData(form);
for (let value of formResults.values()){
    if(value===correctAnswers[index]){
        score = score + 1;
    }
    index = index + 1;
}
outputScore.innerText = "your score is " + score;
}

submitButton.addEventListener("click", calculateScore);