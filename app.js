//UI elements
const number1 = document.querySelector('.num1'),
number2 = document.querySelector('.num2'),
result = document.querySelector('.answer'),
evaluate = document.querySelector('#submit'),
message = document.querySelector('.message'),
container = document.querySelector('.game');

number1.disabled = true;
number2.disabled = true;

//generate two random integer numbers
number1.value = Math.floor(Math.random() * 10);
number2.value = Math.floor(Math.random() * 10);

//add event listners
evaluate.addEventListener('click', calculate);

//calculate function
function calculate(){
    let answer = (parseInt(number1.value) + parseInt(number2.value));
    //if empty
    if(isNaN(result.value)){
      
      setMessage('Please enter a number', 'red');
      gameEnd();
    }

    // it's correct
    if( result.value == answer){
        
        setMessage(" Congrats! It's Correct", 'green');
        gameEnd();
    }else{
        
        setMessage(`Sorry, It's Wrong The Correct Number Is ${answer}`, 'red');
        gameEnd();
    }
   
   
}
//set message function
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
    message.style.fontWeight = 'bold';
    message.style.fontSize = '40px';
}
//game end function
function gameEnd(){
    evaluate.value = 'Play Again';
    evaluate.className += ' play-again';
    result.disabled = true;
    number1.disabled = true;
    number2.disabled = true;

    //add event listner to reload the page
evaluate.addEventListener('click', function(e){
    window.location.reload();
   
});

}
