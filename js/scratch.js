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
console.log(winHorizontal(winninBoard));

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