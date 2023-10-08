
const idNumber = document.querySelector(".id-number");
const advice = document.querySelector(".advice");
const btn = document.querySelector("button");


function newText(){
    
    fetch("https://api.adviceslip.com/advice")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        idNumber.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })

}


btn.addEventListener("click", newText)