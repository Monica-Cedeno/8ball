let answers = document.getElementById("answers")
let pictures = `<img src = images>`



function ask(){
    let pic = Math.floor(Math.random()* pictures.length);
    let img = `<img src = images/${pic}`;
    console.log (img);
    answers.innerHTML = img;
}


