let randomNumber = Math.floor(Math.random() * 1000000) + 1; //Gera uu número aleatório entre 1 e 100. 
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1; //Coloca a contagem de palpites em 1.
let resetButton; //Variável para o botão de reiniciar o jogo que aparecerá ao fim do jogo.

//3 Funções serão criadas: uma para verificar os palpites, uma para encerrar o jogo e a última para reiniciar o jogo.
function checkGuesses() { //Função que verifica os palpites do usuário.
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Palpites anteriores: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Você advinhou o número, parabéns!!';
        lastResult.style.color = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 15) {
        lastResult.textContent = 'FIM DE JOGO!!! Você esgotou suas tentativas!';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Você errou, tente novamente.';
        lastResult.style.color = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Número muito baixo!';
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = 'Número muito alto!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuesses);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar Jogo';
    document.body.appendChild(resetButton);
    resetButton.style.backgroundColor = 'aliceblue';
    resetButton.style.color = 'purple';
    resetButton.style.borderRadius = '15px';
    resetButton.style.width = '100px';
    resetButton.style.height = '60px';
    resetButton.style.fontSize = '20px';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.color = 'aliceblue';
    randomNumber = Math.floor(Math.random() * 1000000) + 1;
}