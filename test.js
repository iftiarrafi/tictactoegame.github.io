console.log("hello world");

let music = new Audio("music.mp3");
let put = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

// function for change the tern

const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

// function to check for win
const checkWin = () => {

}

// Main Logic ( game logic)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            put.play();
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            // let info = document.getElementsByClassName("info");
            // info[0].innerText = "Turn for " + turn;

        }
    })
})