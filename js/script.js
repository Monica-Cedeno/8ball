
const pictures = [
    ("2.jpg"),
    ("3.jpg"),
    ("4.jpg"),
];

let answers = document.getElementById("answers")



function ask(){
    let pic = Math.floor(Math.random()* pictures.length);
    let img = `<img src = images/${pic}`;
    console.log (img);
    answers.innerHTML = img;
}


