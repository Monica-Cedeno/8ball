

createImage('img/magic8ball_start.png');

function ask() {
    const random = Math.floor(Math.random() * 20)+1
    const imgSrc = `./img/magic8ball_${random}.png`;
    createImage(imgSrc)
} 

function createImage(imgSrc) {
    const answers = document.getElementById("answers")
    const response = document.createElement('img');
    response.height = '200';
    response.width = '200';
    response.src = imgSrc;
    

    answers.innerHTML = " ";
    answers.appendChild(response);
}


button.addEventListener("click", function() {
    const questions = document.getElementById("yourQuestions");
    const expression = new RegExp(/\?$/g);
    console.log(questions.value);

    if (expression.test(questions.value)){
        ask()
    }
    else if (questions.value < 2){
        alert ("please type your question")
    }
    else {
        alert ("must include a question mark")
    }
});






