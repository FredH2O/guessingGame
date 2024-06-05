import words from "./words.js";

let randomIndex = Math.floor(Math.random() * words.length); //random number generator
let hiddenMagicWord = words[randomIndex].word; // picks a word
let chosenHint = words[randomIndex].hint; // picks a hint
let lives = 6;
let streak = 0;
let displayWord = "";
for (let s = 0; s < hiddenMagicWord.length; s++) {
    displayWord += "_ ";
}

// getting element
let wordDom = document.getElementById("word");
let hintDom = document.getElementById("hint");
let livesDom = document.getElementById("lives");
let keyboardDisplay = document.getElementById("keyboard");
let streakElement = document.getElementById("streak");
let hostDom = document.getElementById("host");

// update element
wordDom.innerHTML = displayWord;
hintDom.innerHTML = "Hint: " + chosenHint;
livesDom.innerHTML = "💝 = " + lives;
streakElement.innerHTML = "Your streak today is: " + streak;
hostDom.innerHTML = "Goodluck! It gets progressively hard everytime you win!";

// on screen keyboard here
let alphabets = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < alphabets.length; i++) { // creating a for loop for each alphabets in the string
    let button = document.createElement("button");
    button.innerHTML = alphabets[i];
    button.addEventListener("click", guessLetter);
    keyboardDisplay.appendChild(button); // assigns the buttons to the HTML elements in the DOM.
    if (i === 25) {
        // space button
        let spaceBar = document.createElement("button");
        spaceBar.innerHTML = "Space";
        spaceBar.addEventListener("click", guessLetter);
        keyboardDisplay.appendChild(spaceBar);
        // reveal button
        let reveal = document.createElement("button");
        reveal.innerHTML = "Reveal";
        reveal.addEventListener("click", guessLetter)
        keyboardDisplay.appendChild(reveal);
    }
}


// function to handle guessed letters
function guessLetter(event) {
    let guessedLetter = event.target.innerHTML; // will save the letter we click
    let correctGuess = false; // check letter is correct. false is default
    let newDisplayWord = "";
    if (guessedLetter === "Space") { // converts space to an actual " ";
        guessedLetter = " ";
    }
    for (let j = 0; j < hiddenMagicWord.length; j++) {
        if (hiddenMagicWord[j] === guessedLetter) { // checks if letter is in the hiddenMagicWord.
            newDisplayWord += guessedLetter + " "; // cancatenates the guessedLetter and add a " " to the end of the string
            correctGuess = true;
        }
        else {
            newDisplayWord += displayWord[j * 2] + " "; // iterates by 2 because of the " " space
        }
    }

    // Update the display word
    displayWord = newDisplayWord;
    wordDom.innerHTML = displayWord;
    event.target.disabled = true;

    if (guessedLetter === "Reveal" && lives > 0) {
        revealLetter();
        lives--;
        livesDom.innerHTML = "💝 = " + lives;
    } else if (correctGuess === false && guessedLetter !== "Reveal") {
        lives--;
        livesDom.innerHTML = "💝 = " + lives;
    }
    let upperCase = hiddenMagicWord.toUpperCase()
    if (lives < 0) {
        document.getElementById("result").innerHTML = `Game over 💀! The word was ${upperCase} ! ❌`;
        winningStreak();
        resetGame();
    } else if (displayWord.indexOf("_") === -1) {
        document.getElementById("result").innerHTML = `Congratulations 🎉!! The answer is ${upperCase} ✅!`;
        winningStreak();
        resetGame();
    }
}


// Function to reveal a random letter
let revealedLetters = [];
function revealLetter() {
    let unrevealedLetters = []; // Array to store unrevealed letters

    // Loop through each letter in the hidden word
    for (let i = 0; i < hiddenMagicWord.length; i++) {
        let letter = hiddenMagicWord[i];
        let letterNotRevealed = !revealedLetters.includes(letter);
        let letterNotGuessed = displayWord[i * 2] === "_";
        if (letterNotRevealed && letterNotGuessed) {
            unrevealedLetters.push(letter);
        }
    }
    // Pick a random unrevealed letter
    let randomIndex = Math.floor(Math.random() * unrevealedLetters.length);
    let randomLetter = unrevealedLetters[randomIndex];

    // Add the revealed letter to the array
    revealedLetters.push(randomLetter);
    let revealedWord = displayWord.split(" ");
    for (let i = 0; i < hiddenMagicWord.length; i++) {
        if (hiddenMagicWord[i] === randomLetter) {
            revealedWord[i] = randomLetter;
        }
    }
    displayWord = revealedWord.join(" ");
    document.getElementById("word").innerHTML = displayWord;
}

function winningStreak() {
    if (displayWord.indexOf("_") === -1) { // checks if theres any "_"
        streak++; // adds one to the streak
        streakElement.innerHTML = "Well done 👏🏽! Your streak is " + streak + " 😎";
    } else {
        streak = 0;
        streakElement.innerHTML = "You lose 💀! Score is back to " + 0 + " 😭";
    }
}

function resetGame() {
    revealedLetters = []; // empty the array again
    randomIndex = Math.floor(Math.random() * words.length); //random number generator
    hiddenMagicWord = words[randomIndex].word; // picks a word
    chosenHint = words[randomIndex].hint; // picks a hint
    displayWord = "";
    hintDom.innerHTML = "Hint: " + chosenHint;
    //livesDom.innerHTML = "💝 = " + lives;
    for (let i = 0; i < hiddenMagicWord.length; i++) {
        displayWord += "_ ";
    }
    wordDom.innerHTML = displayWord;
    switch (true) {
        case streak >= 0 && streak <= 2:
            lives = 6;
            livesDom.innerHTML = `💝 = ${lives}`; // template literal test
            hostDom.innerHTML = `Keep going!! You can do it! 👍🏼`;
            break;

        case streak >= 3 && streak <= 6:
            lives = 5;
            livesDom.innerHTML = `💝 = ${lives}`; // template literal test 
            hostDom.innerHTML = `Time to make it harder! Permanent -1 to Lives!! 😁`;
            break;

        case streak > 6 && streak <= 9:
            lives = 4;
            livesDom.innerHTML = `💝 = ${lives}`; // template literal test 
            hostDom.innerHTML = `Time for you to lose! -1 to Lives again!! 😆`;
            break;

        case streak >= 10:
            lives = 3;
            livesDom.innerHTML = `💝 = ${lives}`; // template literal test
            hostDom.innerHTML = `I won't let you win anymore! 😡💢 -1 to Lives again!!`;
            break;

        default:
            break;
    }

    keyboardDisplay.querySelectorAll("button").forEach(button => {
        button.disabled = false;
    });
}