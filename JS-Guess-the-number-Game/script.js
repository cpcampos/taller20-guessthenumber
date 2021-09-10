let randomNumber=Math.floor(Math.random()*100)+1;
// Math.random genera un num entre cero y 1, 
//se multiplica por 100 para q genere un num entre 0 y 100,
//se le suma 1 para que el numero sea entre 1 y 100
//Math.floor redondea al num inferior
const guesses= document.querySelector('.guesses');
//queryselector ayuda a ubicar los elementos de una clase determinada
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const guessSubmit=document.querySelector('.guessSubmit');
const guessField=document.querySelector('.guessField');
let guessCount=1;
let reserButton;
function checkGuess(){
//alert('Funcicon ejecutada! :0');
let userGuess=Number(guessField.value);
//number() me convierte el valor en un numero
    if (guessCount===1) //triple igual. Comparacion por tipo, por valor, el doble igual solo compara el resultado. el triple igual es mas eficiente
        {
            guesses.textContent=' Previous guesses '
        }
        guesses.textContent+= userGuess + ' ';
        if (userGuess===randomNumber) {
            lastResult.textContent = ' 🧧 Congratz! you won!';
            lastResult.style.backgroundColor='green';
            lowOrHi.textContent='';
            setGameOver();
        } else if(guessCount === 10){
            lastResult.textContent=' 😥 Game over';
            setGameOver();
        }else{
            lastResult.textContent='Wrong!';
            lastResult.style.backgroundColor='red';
            if (userGuess < randomNumber){
                lowOrHi.textContent=' 👎Too low!';

            }else{
                lowOrHi.textContent=' 👍 Too high!';
            }
        }
 guessCount ++;
 guessField.value='';
 guessField.focus();

}
guessSubmit.addEventListener('click',checkGuess);

//checkGuess();
function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='🎮 Start again.';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll('.resultParas p');
    for (let i=0; i < resetParas.length; i++){
           resetParas[i].textContent='';
    }

resetButton.parentNode.removeChild(resetButton);

guessField.disabled=false;
guessSubmit.disabled=false;
guessField.value='';
guessField.focus();

lastResult.style.backgroundColor='White';
randomNumber=Math.floor(Math.random()*100)+1;

}