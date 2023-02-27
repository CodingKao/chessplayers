// Function for greetings
function greetings(){
    alert("Welcome to my website! This website is about the game of Chess.");

    let userName = prompt("What is your name?");
    console.log(userName);

    document.write("Hello, " + userName + "! ");
    document.write("Welcome to my website! ");  
    
    return userName;
}

// Function for fun
    function likeChess(userName){
        let userAnswer = prompt("Hello, " + userName + "! Are you good at Chess? Type: yes/no");
        console.log(userAnswer);
    
         if(userAnswer == 'yes'){
         let userRating = prompt("What is your Elo or rating?")
         document.write("Based on your Elo rating of " + userRating + ".  You need more practice.")
     } else if(userAnswer == 'no'){
         document.write("Based on your experience, you need more practice.")
     } else {
         prompt("Hello, " + userName + "! Please tell us your experience level:");
         document.write("Based on your experience, you need more practice.")
    }    
}

// Loop to enter website
    function favPiece() {
        let userGuess = prompt("Choose my favorite Chess piece to enter? Choose from Knight, Rook or Bishop.");
     while (userGuess != "Knight") {
        userGuess = prompt("Sorry.  Try again. Choose from Knight, Rook or Bishop.");
        } 
            if (userGuess == "Rook"){
            userGuess =prompt("That is wrong. Try again. ");
        } else {
            document.write("That is correct! You may enter!")
        }
            
    }

    favPiece();

// Loop image for user
function addPawn() {
    let userPick = 0;

    while (userPick < 1 || userPick >5) {
        userPick = parseInt(prompt("Pleaes pick a number from 1 to 5."));

        if (userPick < 1 || userPick > 5){
            console.log(userPick);
            alert("Error: Please pick a valid number between 1 and 5");
            }
        }
        
        alert(userPick + " Pawns it is! Check bottom of webpage.");
    

    for (let i = 0; i < userPick; i++) {
        document.write('<img class="from-js" src="pawn.jpg" />');
    }
}
// / addPawn();
// Place script at bottom of webpage
