/** constants */
// defining the players
const players = {
    'red': '1',
    'blue': '-1'
}
/** app's state/variables */
// defining the empty board
let board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]


// Defining whos starting the game
let turn = 1;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
player2.style.backgroundColor = "rgb(0,0,255,.2)";
/** cached elem refs */
// START BUTTON
let startGame = document.getElementById("startGame");
let restartGame = document.getElementById("restartGame");
let overlay = document.getElementById("overlay");
let column = document.getElementsByClassName("circle");
/** event listeners */
// WHEN START BUTTON IS CLICKED IT REMOVES THE OVERLAY LETTING THE GAME BEGIN
startGame.addEventListener("click", function(e){
    // Checking that when i click start button the id pop up
    // console.log(e.target.id)
    overlay.parentNode.removeChild(overlay);
})

restartGame.addEventListener("click", function(){
    let board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ]
    turn = 1;
    player2.style.backgroundColor = "rgb(0,0,255,.2)";
    player1.style.backgroundColor = "rgb(255,0,0,0)";
    handleClick();


})

for (let index = 0; index < column.length; index++) {
    const element = column[index];
    element.addEventListener("click", handleClick);
}
/** functions */
// console.log(players['red']);
function handleClick(e){
    // FINDING THE INDEX OF THE COLUMN CLICKED
    let idxColumn = parseInt(event.target.id[1]);
    // FINDING THE INDEX OF THE ROW CLICKED
    let idxRow = parseInt(event.target.id[3]);
    dropToBottom(idxColumn);
    // board[idxRow][idxColumn] = turn;
    // Switching between turns

    switchBackgroundPlayer();
    turn *= -1;
    render();
    checkWinner(board);
}

function switchBackgroundPlayer(){
    if (turn === 1) {
        player1.style.backgroundColor = "rgb(255,0,0,.2)"
        player2.style.backgroundColor = "rgb(0,0,255,0)"
    } else if (turn === -1) {
        player1.style.backgroundColor = "rgb(255,0,0,0)"
        player2.style.backgroundColor = "rgb(0,0,255,.2)"
    }
}
// Make it so it fills in bottom row first and moves upward
function dropToBottom(idxColumn){
    for (let index = 5; index > -1; index--) {
        if(board[index][idxColumn] === ""){
            board[index][idxColumn] = turn;
            return;
        }
    }    
}

function render(){
    // Lets me know whats filled in on the board in javascript
    // In order to figure out whats being used
    // LOOPS THROUGH ROWS
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        // LOOPS THROUGH THE COLUMN IN THAT SPECIFIC ROW
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            // ORIGINALY FINDING THE specific Circle clicked
            let circle = document.getElementById("c" + columnIndex + "r" + rowIndex);
            let player1 = document.getElementById("player1"); 
            // console.log(circle);
            // WHEN CLICK fill in based on Players turn
            if(board[rowIndex][columnIndex] === 1) {
                circle.style.background = 'red';
                // player1.style = "outline : solid";
            } else if(board[rowIndex][columnIndex] === -1) {
                circle.style.background = 'blue';
                // player1.style = "outline : double";
            }
        }
    }
}



function checkWinner(board){
// for loop on an Array

    // diagnol win
    const diagnolWin = () =>{
        let diagnolWinningCombos = [
            [board[3][0],board[2][1],board[1][2],board[0][3]],
            [board[4][0],board[3][1],board[2][2],board[1][3]],
            [board[3][1],board[2][2],board[1][3],board[0][4]],
            [board[5][0],board[4][1],board[3][2],board[2][3]],
            [board[4][1],board[3][2],board[2][3],board[1][4]],
            [board[3][2],board[2][3],board[1][4],board[0][5]],
            [board[5][1],board[4][2],board[3][3],board[2][4]],
            [board[4][2],board[3][3],board[2][4],board[1][5]],
            [board[3][3],board[2][4],board[1][5],board[0][6]],
            [board[5][2],board[4][3],board[3][4],board[2][5]],
            [board[4][3],board[3][4],board[2][5],board[1][6]],
            [board[5][3],board[4][4],board[3][5],board[2][6]],
            [board[5][3],board[4][2],board[3][1],board[2][0]],
            [board[5][4],board[4][3],board[3][2],board[2][1]],
            [board[4][3],board[3][2],board[2][1],board[1][0]],
            [board[5][5],board[4][4],board[3][3],board[2][2]],
            [board[4][4],board[3][3],board[2][2],board[1][1]],
            [board[3][3],board[2][2],board[1][1],board[0][0]],
            [board[5][6],board[4][5],board[3][4],board[2][3]],
            [board[4][5],board[3][4],board[2][3],board[1][2]],
            [board[3][4],board[2][3],board[1][2],board[0][1]],
            [board[4][6],board[3][5],board[2][4],board[1][3]],
            [board[3][5],board[2][4],board[1][3],board[0][2]],
            [board[3][6],board[2][5],board[1][4],board[0][3]],
        ]

        for (let i = 0; i < diagnolWinningCombos.length; i++) {
            // console.log(diagnolWinningCombos[i])
            let total = 0;
            // for loop in order to go in array
            for (let j = 0; j < diagnolWinningCombos[i].length; j++) {
            // add all the points to equal -4 or 4
                total += diagnolWinningCombos[i][j];
                if(total === 4){
                    console.log("player 1 won")
                }else if(total === -4){
                    console.log("player 2 won")
                }
            }   
            // add all the points to equal -4 or 4
        }
    }

    diagnolWin();

    // const winHorizontal = (board) => {
    //     // outer loop
    //    console.log(board)
    //     for (let i = 0; i < board.length; i++) {
    //         let lastSeen = null;
    //         let currentCount = 0;
    //     //    inner loop
    //         console.log(board[i])
    //        for (let index in board[i]) {
    //            console.log( !!board[i][index])
    //         //    check to change the value to the current number
    //             if(lastSeen === null && !!board[i][index]){
    //                 lastSeen = board[i][index];
    //                 currentCount = 1;
    //             } else if(lastSeen === board[i][index]) {
    //                 currentCount++;
    //                 if(currentCount === 4){
    //                     return lastSeen
    //                 }
    //             } else if(lastSeen !== board[i][index]) {
    //                 lastSeen = board[i][index];
    //                 currentCount = 0;
    //             }
    //        }
    //     }
    
    //     // loop outer way 2
    //     // horizontal loop the outer one twice
    //     return false;
    // }
    
    //      // console.log(winHorizontal(board));
    
    //     // win function
    //     // win horionx
    //     const winHoriz = winHorizontal(board);
    //     // -1 , 1, false
    //     // win vertical
    //     // -1 , 1, false
       
}
