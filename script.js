console.log("hello world");

let music = new Audio("music.mp3");
let put = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");
let gamewin = new Audio("gamewin.mp3")
let isgameover = false;

let turn = "X";

// function for change the tern

const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],

    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {

            isgameover = true;
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            gamewin.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";



        }

    })
}


// Main Logic ( game logic)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            put.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                // let info = document.getElementsByClassName("info");
                // info[0].innerText = "Turn for " + turn;
            }


        }
    })
})

//reset button

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";



    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    gamewin.pause();
    // let info = document.getElementsByClassName("info");
    // info[0].innerText = "Turn for " + turn;

})