

// function checkWinner(){
//     const winHorizontal = (board) => {
//         console.log('board, line 113', board);
//         // outer loop
//         for (let row in board) {
//             // line 117 is hard-coded to 5 to show you that the iteration
//             // needs to start at row 5 (element 5, in arr of arr)
//             // then decreament number 5 until
//             //it reaches the top row, or element 0
//             row = 5; // for demo only: row set to 5 to demonstrate
//             // const row = (row) => {
//             //    for (let index = 5; index > -1; index--) {
                    
//             //    }
//             // }
//             // that we need to target the bottom row
//             console.log('row number 5, line 121', board[row]);
//             console.log('board, line 122', board)
//             let lastSeen = null;
//             let currentCount = 0;
//             //  inner loop
//             for (let index in board[row]) {
//                   console.log('board[row][index], line 124', board[row][index]);
//                 //    check to change the value to the current number
//                 if(lastSeen === null){
//                     lastSeen = board[row][index];
//                     currentCount = 1;
//                     console.log(lastSeen)
//                     console.log(currentCount);
//                 } else if(lastSeen === board[row][index]) {
//                     currentCount++;
//                     if(currentCount === 4){
//                         return lastSeen
//                     }
//                 } else if(lastSeen !== board[row][index]) {
//                     lastSeen = board[row][index];
//                     currentCount = 0;
//                 }
//             }
//         }
//     // loop outer way 2
//     // horizontal loop the outer one twice
//         return false;
//     }

// const winHoriz = winHorizontal(board);

//     if (winHoriz === -1) {
//         // someone won the game
//         console.log("player 2 won");
//     } else if ( winHoriz === 1) {
//         console.log("player 1 won");
//     }
// }
// // function checkWinHorix(board) {
// //     let currentInARow = 0;
// //     let lastSeen = null;
// //     for (row in board) {
// //        for (element in row) {
// //           if (lastSeen === null ) {
// //             lastSeen = element;
// //           } else if (element === lastSeen) {
// //              currentInRow += 1;
// //              // check if 4 in a row
// //            } else {
// //              currentInARow = 0;
// //              lastSeen = element;
// //             }
// //        }
// //     }
// // }
// // let horizontalWinState = [
// //     [1,1,1,1,-1,-1,-1],
// //     [-1,1,1,1,1,-1,-1],
// //     [-1,-1,1,1,1,1,-1],
// //     [-1,-1,-1,1,1,1,1],
// //     [,1,1,1,1,"","",""],
// //     ["",1,1,1,1,"",""],
// // ]
// /** win logic
//  * 
//  * iterate over the board, an array of arrays
//  * for each funct {
//  *  for each funct {
//  *  }
//  * }
//  * 
//  * baby step:
//  * how to find the first win
//  * board[5][0], board[4][0], board[3][0], board[2][0]
//  * figure out how to find all vertical wins dynamically
//  * 
// */
// // vertical win
// // let count = 0;
// // console.log(board)
// // let horizontalWin = board.find(function(winningCombination){
// //     for (let i = 0; i < winningCombination.length; i++) {
// //         function sum(total, num) {
// //             return total + num;
// //         }
// //         if (sum === 4) {
// //             console.log("Player 1 wins")
// //         }
// //     }
// //     // if (players['red'] === winningCombination[i]) {
// //     // }else{
// //     // }
// //     // }
// //     // return players.keys(players)[0] === winningCombination;
// //     // console.log(players["red"])
// // })
// // var sum = 0;
// // board.forEach(function(row, i)  { 
// //     row.forEach(function(rowItem, j) {
// //         // 1 -1 1 1 1 1
// //         // 0  1 2 3 4 5
// //         if (rowItem !== row[j - 1] && j > 0) {
// //             sum = 0;
// //             console.log(rowItem)
// //             console.log(sum)
// //             return;
// //         }
// //         sum += rowItem;
// //         if (sum === 4) {
// //             console.log("Player 1 wins")
// //             return;
// //         } else if(sum === -4) {
// //             console.log("Player 2 wins")
// //         }
// //     });
// // });
// //         board.forEach(function(row){
// //             if(players.1 === count)
// //         })
// // // SWITCHING TURNS NEXT
// // // WHEN CLICK fill in
// // // Start game button
// // // when file loads to the browser
// // // when user clicks start begin game
// //     // function to intialize game. empty board
// // // Define the players make them switch turns
//     // make it so like a box fills in around player 1 or 2 inorder to show whos turn it is 
//     // Switch box color when opposite player makes a move with a click
// // // Make it so it fills in bottom row first and moves upward
// // Make animation for piece drop down the board 
//     // start anamation when click happens
// // everytime user plays check for a win
//     // make vertical wins
//         // go through each column ussing an array of columns
//     // make horizontal wins
//         // go through each row with an array to check for win
//     // make diagnol wins
//         // go through an array of arrays of possible diagnol win
// // Declare winner or tie
// // use a function to show a message player 1 or 2 wins or its a tie message
// // create reset button
// // click function to initialze game again
// // Maybe keep score of wins
// // const winninBoard = [
// //     [-1,-1,-1,-1], // track consecutive plays
// //     [-1,1,1,-1],// track consecutive plays
// //     [-1,1,1,-1],
// //     [-1,1,1,-1]
// // ]
// // const winHorizontal = (winninBoard) => {
// //     // outer loop
// //     for (let row in winninBoard) {
// //        console.log(winninBoard[row])
// //         let lastSeen = null;
// //         let currentCount = 0;
// //        // inner loop
// //        for (let index in winninBoard[row]) {
// //            console.log(winninBoard[row][index])
// //         //    check to change the value to the current number
// //         if(lastSeen === null){
// //             lastSeen = winninBoard[row][index];
// //             currentCount = 1;
// //         } else if(lastSeen === winninBoard[row][index]) {
// //             currentCount++;
// //             if(currentCount === 4){
// //                 return lastSeen
// //             }
// //         } else if(lastSeen !== winninBoard[row][index]) {
// //             lastSeen = winninBoard[row][index];
// //             currentCount = 0;
// //         }
// //        }
// //     }
// //     // loop outer way 2
// //     // horizontal loop the outer one twice
// //     return false;
// // }
// // console.log(winHorizontal(winninBoard));
// // // win function
// //     // win horionx
// //     const winHoriz = winHorizontal(winninBoard);
// //     // -1 , 1, false
// //     // win vertical
// //         // -1 , 1, false
// //     if (winHoriz === -1 || winVertical === -1) {
// //         // someone won the game
// //        console.log(`player 2 won`);
// //     } else if ( winVertical !== false ) {
// //     }


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

const winninBoard = [
    [-1,-1,-1,-1], // track consecutive plays
    [-1,1,1,-1],// track consecutive plays
    [-1,1,1,-1],
    [-1,1,1,-1]
]



const winHorizontal = (winninBoard) => {

    // outer loop
    for (let row in winninBoard) {
       console.log(winninBoard[row])
        let lastSeen = null;
        let currentCount = 0;
       // inner loop
       for (let index in winninBoard[row]) {
           console.log(winninBoard[row][index])
        //    check to change the value to the current number
            if(lastSeen === null){
                lastSeen = winninBoard[row][index];
                currentCount = 1;
            } else if(lastSeen === winninBoard[row][index]) {
                currentCount++;
                if(currentCount === 4){
                    return lastSeen
                }
            } else if(lastSeen !== winninBoard[row][index]) {
                lastSeen = winninBoard[row][index];
                currentCount = 0;
            }
       }
    }

    // loop outer way 2
    // horizontal loop the outer one twice
    return false;
}



// console.log(winHorizontal(winninBoard));

// win function

    // win horionx
    const winHoriz = winHorizontal(winninBoard);
    // -1 , 1, false
    // win vertical
        // -1 , 1, false

    if (winHoriz === -1 || winVertical === -1) {
        // someone won the game
       console.log(`player 2 won`);

    } else if ( winVertical !== false ) {

    }



    TRYING TO FIGURE OUT VERTICAL


const winninBoard = [
    [-1,-1,-1,-1], // track consecutive plays
    [1,1,1,-1],// track consecutive plays
    [-1,1,1,-1],
    [-1,1,1,-1]
]

const winVertical = (winninBoard) => {
    for(let row in winninBoard) {
        let firstNumInArray = winninBoard[row][0];

        console.log(winninBoard[row][0])
        let lastSeen = null;
        let currentCount = 0;
        function pW(firstNumInArray) {
            
            if (let index = 5; index > -1; index-- in winninBoard) {
                
            }           
        }    
    }
}


console.log(winVertical(winninBoard));