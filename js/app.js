// START BUTTON
let startGame = document.getElementById("startGame");
let overlay = document.getElementById("overlay")
// WHEN START BUTTON IS CLICKED IT REMOVES THE OVERLAY LETTING THE GAME BEGIN

startGame.addEventListener("click", function(e){
    // Checking that when i click start button the id pop up
    // console.log(e.target.id)
    overlay.parentNode.removeChild(overlay);
    
})

// defining the empty board
let board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]



// defining the players
const players = {
    'red': '1',
    'blue': '-1'
}


// console.log(players['red']);

// Defining whos starting the game
let turn = 1;
let player1 = document.getElementById("player1");



let column = document.getElementsByClassName("circle");
for (let index = 0; index < column.length; index++) {
    const element = column[index];
    element.addEventListener("click", handleClick);
    
}



function handleClick(e){
    // LETS ME KNOW WHERE IM CLICKING
    // console.log(e.target.id)
    

    // FINDING THE INDEX OF THE COLUMN CLICKED
    let idxColumn = parseInt(event.target.id[1]);
    // console.log('idxColumn', idxColumn);
    // FINDING THE INDEX OF THE ROW CLICKED
    let idxRow = parseInt(event.target.id[3]);
    // console.log('idxRow', idxRow);
    
    dropToBottom(idxColumn);

    

    // board[idxRow][idxColumn] = turn;
    // console.log(board);


    // Switching between turns
    turn *= -1;
    // console.log('turn', turn);

    render();
  
    checkWinner(board);
    

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
            
              
            // console.log(circle);
            // WHEN CLICK fill in based on Players turn

            
            if(board[rowIndex][columnIndex] === 1) {
                circle.style.background = 'red';
                player1.style.backgroundColor = "rgb(255,0,0,.2)"
                
                
            } else if(board[rowIndex][columnIndex] === -1) {
                circle.style.background = 'blue';
                p1d = document.getElementsByClassName("p1d").style.backgroundColor = "none";
               
            }
        }
    }
}

function checkWinner(){
    const winHorizontal = (board) => {
        console.log(board);

        // outer loop
        for (let row in board) {
           console.log(board[row]);
            let lastSeen = null;
            let currentCount = 0;
           // inner loop
           for (let index in board[row]) {
               console.log(board[row][index]);
            //    check to change the value to the current number
            if(lastSeen === null){
                lastSeen = board[row][index];
                currentCount = 1;
            } else if(lastSeen === board[row][index]) {
                currentCount++;
                if(currentCount === 4){
                    return lastSeen
                }
            } else if(lastSeen !== board[row][index]) {
                lastSeen = board[row][index];
                currentCount = 0;
            }
           }
        }
        // loop outer way 2
        // horizontal loop the outer one twice
        return false;
    
    }
    console.log(winHorizontal(board));
    const winHoriz = winHorizontal(board);

    if (winHoriz === -1) {
        // someone won the game
       console.log("player 2 won");
    } else if ( winHoriz === 1) {
        console.log("player 2 won");
    }
}



// function checkWinHorix(board) {
//     let currentInARow = 0;
//     let lastSeen = null;
//     for (row in board) {
//        for (element in row) {
//           if (lastSeen === null ) {
//             lastSeen = element;
//           } else if (element === lastSeen) {
//              currentInRow += 1;
//              // check if 4 in a row
//            } else {
//              currentInARow = 0;
//              lastSeen = element;
//             }
//        }
//     }
// }

// let horizontalWinState = [
//     [1,1,1,1,-1,-1,-1],
//     [-1,1,1,1,1,-1,-1],
//     [-1,-1,1,1,1,1,-1],
//     [-1,-1,-1,1,1,1,1],
//     [,1,1,1,1,"","",""],
//     ["",1,1,1,1,"",""],
// ]


/** win logic
 * 
 * iterate over the board, an array of arrays
 * for each funct {
 *  for each funct {
 *  }
 * }
 * 
 * baby step:
 * how to find the first win
 * board[5][0], board[4][0], board[3][0], board[2][0]
 * figure out how to find all vertical wins dynamically
 * 
*/

// vertical win
// let count = 0;
// console.log(board)

// let horizontalWin = board.find(function(winningCombination){
//     for (let i = 0; i < winningCombination.length; i++) {
//         function sum(total, num) {
//             return total + num;
//         }
//         if (sum === 4) {
//             console.log("Player 1 wins")
//         }
        
//     }
//     // if (players['red'] === winningCombination[i]) {
        
//     // }else{
//     // }
//     // }
//     // return players.keys(players)[0] === winningCombination;
//     // console.log(players["red"])
// })
// var sum = 0;
// board.forEach(function(row, i)  { 
//     row.forEach(function(rowItem, j) {
//         // 1 -1 1 1 1 1
//         // 0  1 2 3 4 5
//         if (rowItem !== row[j - 1] && j > 0) {
//             sum = 0;
//             console.log(rowItem)
//             console.log(sum)
//             return;
//         }

//         sum += rowItem;
//         if (sum === 4) {
//             console.log("Player 1 wins")
//             return;
//         } else if(sum === -4) {
//             console.log("Player 2 wins")
//         }
//     });
// });

//         board.forEach(function(row){
//             if(players.1 === count)


//         })

// // SWITCHING TURNS NEXT

// // WHEN CLICK fill in

// // Start game button


// // when file loads to the browser
// // when user clicks start begin game
//     // function to intialize game. empty board

// // Define the players make them switch turns



    // make it so like a box fills in around player 1 or 2 inorder to show whos turn it is 
    // Switch box color when opposite player makes a move with a click


// // Make it so it fills in bottom row first and moves upward
// Make animation for piece drop down the board 
    // start anamation when click happens

// everytime user plays check for a win
    // make vertical wins
        // go through each column ussing an array of columns
    
    // make horizontal wins
        // go through each row with an array to check for win

    // make diagnol wins
        // go through an array of arrays of possible diagnol win

// Declare winner or tie
// use a function to show a message player 1 or 2 wins or its a tie message

// create reset button
// click function to initialze game again



// Maybe keep score of wins





