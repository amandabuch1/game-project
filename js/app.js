  
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

// START BUTTON
let startGame = document.getElementById("startGame");
let restartGame = document.getElementById("restartGame");
let overlay = document.getElementById("overlay");
let column = document.getElementsByClassName("circle");
let winner = document.getElementById("winner");
/** event listeners */
// WHEN START BUTTON IS CLICKED IT REMOVES THE OVERLAY LETTING THE GAME BEGIN
startGame.addEventListener("click", function(e){
    // Checking that when i click start button the id pop up
    // console.log(e.target.id)
    overlay.parentNode.removeChild(overlay);
})

const restartTheGame = () => {
    document.querySelector('.grid').style.pointerEvents = "initial";
    handleClick(board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ])
 
    turn = 1;
    player2.style.backgroundColor = "rgb(0,0,255,.2)";
    player1.style.backgroundColor = "rgb(0,0,0,0)";
    winner.innerHTML = "";
    // In order to reset the cicles on the board
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            let circle = document.getElementById("c" + columnIndex + "r" + rowIndex);     
            circle.style.background = ' rgb(220,220,220)';
        }
    }
}

// When resart is clicked game starts over
restartGame.addEventListener("click", restartTheGame)

for (let index = 0; index < column.length; index++) {
    const element = column[index];
    element.addEventListener("click", handleClick);
}
/** functions */
function handleClick(e){
    // FINDING THE INDEX OF THE COLUMN CLICKED
    let idxColumn = parseInt(event.target.id[1]);
    // FINDING THE INDEX OF THE ROW CLICKED
    let idxRow = parseInt(event.target.id[3]);
   
    // board[idxRow][idxColumn] = turn;
    if (dropToBottom(idxColumn)) {
    // Switching turns and switch the background of player1/2
        switchBackgroundPlayer();
        turn *= -1;
        render();
        checkWinner(board);
    }
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
    let currentFilled = 0;
    for (let index = 5; index > -1; index--) {
        if (board[index][idxColumn] !== "" ) {
            currentFilled ++;
        }
        else if(currentFilled < 6 && board[index][idxColumn] === ""){
            board[index][idxColumn] = turn;
            return true;
        }

        else if (currentFilled === 6) return false;
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
                    winner.innerHTML = "Player 1 won!"; 
                    document.querySelector('.grid').style.pointerEvents = "none";
                }else if(total === -4){
                    winner.innerHTML = "Player 2 won!";
                    document.querySelector('.grid').style.pointerEvents = "none";
                }
            }   
            // add all the points to equal -4 or 4
        }
    }

    diagnolWin();

    const winHorizontal = (board) => {
        // outer loop
        for (let i = 0; i < board.length; i++) {
            let lastSeen = null;
            let currentCount = 0;
        //    inner loop
           for (let index in board[i]) { 
            //    check to change the value to the current number
                if(lastSeen === null && board[i][index] !== ""){
                    lastSeen = board[i][index];
                    currentCount = 1;
                } else if(lastSeen === board[i][index]) {
                    currentCount++;
                    if(currentCount === 4){
                        return lastSeen
                    }
                } else if(lastSeen !== board[i][index] && board[i][index] !== "") {
                    lastSeen = board[i][index];
                    currentCount = 1;
                } else if (board[i][index] === "") {
                    lastSeen = null;
                    currentCount = 0;
                }
           }
        }
    
        // loop outer way 2
        // horizontal loop the outer one twice
        return ;
    }
    
        const winHoriz = winHorizontal(board);
        if (winHoriz === -1) {
            winner.innerHTML = "Player 2 won!";
            document.querySelector('.grid').style.pointerEvents = "none";
        } else if (winHoriz === 1) {
            winner.innerHTML = "Player 1 won!";
        }
       
}