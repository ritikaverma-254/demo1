let randomnumber = (parseInt((Math.random())*100+1))

const guessslot = document.querySelector(".guesses")
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const remainguess = document.querySelector('.lastResult')
const lowtoheigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame)
{
  submit.addEventListener('click',function(e)
  {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validGuess(guess);
   } ) }

   function validGuess(guess)
   {
     if(isNaN(guess)||guess < 1||guess > 100)
     {
       alert("Plzz Put a Correct Input");
     }
     else 
     {
       prevGuess.push(guess)
       if(prevGuess.length===10)
       {
         displayGuess(guess);
         displayMessage(`guess Number is not Correct ${randomnumber} `)
         endGame();
       }
       else 
       {
         displayGuess(guess);
         checkGuess(guess);
       }
     }
   }
   function checkGuess(guess)
   {
     if(guess === randomnumber)
     {
       displayMessage(`Your Guess is correct ${randomnumber}`);
       endGame()
     }
     else if( guess > randomnumber){
       displayMessage('your guess is greater than Number');
     }
     else if ( guess < randomnumber){
       displayMessage('Your guess is smaller than Number');
     }
   }
   function displayGuess(guess){
     userInput.value = '';
     guessslot.innerHTML += `${guess} ,`
     remainguess.innerHTML =prevGuess.length
   }
   function displayMessage(message){
     lowtoheigh.innerHTML = `<h2>${message}<h2>`;
   }

   function endGame()
   {
     userInput.value = ''
     userInput.setAttribute("disabled","");
     p.classList.add('button')
     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
     startOver.appendChild(p);
     playGame = false;
     console.log(userInput.hasAttribute("disabled"));
     newGame()
   }
   function newGame()
   {
    
     const newGamebutton = document.querySelector('#newGame')
     newGamebutton.addEventListener('click',function(e){
       console.log("Reset game is clicked");
       randomnumber  = (parseInt((Math.random())*100+1))
       prevGuess = [];
       console.log(numGuess,'num guessing');
       numGuess = 1;
       guessslot.innerHTML = '';
       
       remainguess.innerHTML = `${11 - numGuess}`;
       console.log("this is working")
       userInput.removeAttribute('disabled','');
       startOver.removeChild(p);

       playGame = true;
     }
    )
   }
