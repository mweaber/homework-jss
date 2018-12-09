        // Creating the array that will hold all possible CPU guesses
        var letters = ["a", "b", "c", "d", "e",
            "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o",
            "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z"];

        // Naming all my variables to be used

        // Naming an empty array to store all user guesses
        var userPick = [];

        // Another empty array to push to the html once a guess is made. 
        
        var pickedKey = [];

        // Variable for when the user presses a key
        var guess;

        // Variable for chances the user gets
        var chances = 9;

        // Var to be updated for each win
        var winner = 0;

        // Var to be updated for each loss
        var losses = 0;

        var comLetter;
        var comNum;

        // Var to get ID by for the <span> tags
        var guessMade = document.getElementById("guessMade");
        var winsMade = document.getElementById("winsMade");
        var lossesMade = document.getElementById("lossesMade");
        var writePicks = document.getElementById("writePicks");


        // Function made to get computer letter
        function computerGuess() {

            // Random number to letters array
            // Using +0 because the array beginning position is 0
            comNum = (Math.floor((Math.random() * 25) + 0));
            // Sets variable comLetter to the number from the letters array
            comLetter = letters[comNum];
            console.log(comLetter);

        }
        
        // Event to capture key up
        document.onkeyup = function (event) {
            guess = event.key
            console.log(guess);


            // Start of if to compare guess and computer pick
            if (guess == comLetter) {
                console.log("Ya won!");

                // Runs the win function if guess correct
                wins();
                // Runs the computerGuess function to get new letter
                computerGuess();
            
            // Else if to keep repeat guesses
            // If the guess is not equal to a number from the letters array and 

            } else if (guess != comLetter && userPick.indexOf(guess) != -1) {
                console.log("Already picked that");
            } else {
                // Counts chances down
                chances--;
                guessMade.textContent = chances;
                
                // Trying to get the guesses to list in the html
                // Pushes the user guess to the empty array
                userPick.push(guess);
                pickedKey.push(guess);
                writePicks.textContent = pickedKey;
                // If statement to run loss
                if (chances == 0) {
                    console.log("Ya lost");
                    lost();


                }
            }
        }

        computerGuess();


        function wins() {
            userPick = [];
            pickedKey = [];
            winner++;
            chances = 9;
            winsMade.textContent = winner;
            guessMade.textContent = chances;
        }

        function lost() {
            userPick = [];
            pickedKey = [];
            losses++;
            chances = 9;
            lossesMade.textContent = losses;
            guessMade.textContent = chances;
            alert("The letter was " + comLetter);
        }


