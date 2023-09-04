document.addEventListener('DOMContentLoaded', function () {
    // Function for text animation.
    function animation(text) {
        const textAnime = document.querySelector('.text-anime');
        let i = 0;
        textAnime.textContent = '';
        function animate() {
            if (i < text.length) {
                textAnime.textContent += text.charAt(i);
                i++;
                setTimeout(animate, 100);
            }
        }
        animate();
    }

    animation("Fight With AI to Save your job.");

    // Function for button to sound on click
    const sound = document.querySelectorAll('.options');
    const buttonClickSound = new Audio('./audio/button.wav');
    const winSound = new Audio('./audio/yeah.wav');
    const loseSound = new Audio('./audio/aww.wav');

    sound.forEach(sound => {
        sound.addEventListener('click', () => {
            buttonClickSound.play();
        });
    });

    // Selecting the buttons and other elements
    const compScore = document.querySelector('.score-comp');
    const meScore = document.querySelector('.score-me');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');
    const resultText = document.querySelector('.result-text');
    const playAgainBtn = document.querySelector('.play-again-btn');
    const playerChoiceText = document.querySelector('.player-choice-text');
    const popup = document.querySelector('.popup');
    const popupText = document.querySelector('.popup-text');

    let myScore = 0;
    let aiScore = 0;
    let gameOver = false;

    rock.addEventListener('click', () => chooseOption(1));
    paper.addEventListener('click', () => chooseOption(2));
    scissor.addEventListener('click', () => chooseOption(3));

    function chooseOption(playerChoice) {
        if (!gameOver) {
            const computerChoice = Math.floor(Math.random() * 3) + 1;
            displayChoices(playerChoice, computerChoice);
            updateScores(playerChoice, computerChoice);
            checkGameOver();
        }
    }

    function displayChoices(playerChoice, computerChoice) {
        const choices = ["Rock", "Paper", "Scissor"];
        playerChoiceText.textContent = `You choose ${choices[playerChoice - 1]}`;
        resultText.textContent = `AI choose ${choices[computerChoice - 1]}`;
    }

    function updateScores(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            meScore.style.color = "white";
            compScore.style.color = "white";
        } else if (
            (playerChoice === 1 && computerChoice === 2) ||
            (playerChoice === 2 && computerChoice === 3) ||
            (playerChoice === 3 && computerChoice === 1)
        ) {
            meScore.style.color = "red";
            compScore.style.color = "green";
            aiScore++;
        } else {
            meScore.style.color = "green";
            compScore.style.color = "red";
            myScore++;
        }

        meScore.textContent = myScore.toString();
        compScore.textContent = aiScore.toString();
    }

    function checkGameOver() {
        if (myScore === 5 || aiScore === 5) {
            gameOver = true;
            if (myScore > aiScore) {
                resultText.textContent = "You Save your Job!";
                winSound.play();
                popupText.textContent = "Let's play again and defeat AI.";
            } else {
                resultText.textContent = "You Lose your Job!";
                loseSound.play();
                popupText.textContent = "Let's play again and Save Job!";
            }
            popup.style.display = "block";
            playAgainBtn.style.display = "block"; // Show the "Play Again" button
        }
    }

    // Reset the popup when the "Play Again" button is clicked
    playAgainBtn.addEventListener('click', () => {
        resetGame();
    });

    function resetGame() {
        myScore = 0;
        aiScore = 0;
        meScore.textContent = "0";
        compScore.textContent = "0";
        meScore.style.color = "white";
        compScore.style.color = "white";
        gameOver = false;
        resultText.textContent = "";
        playerChoiceText.textContent = "";
        playAgainBtn.style.display = "none";
        popup.style.display = "none";
        popupText.textContent = ""; // Clear the popup text
    }
});
