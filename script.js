//this variable calls in from the html using jQuery
let quizButtonEl = document.querySelector('#start-quiz');
let quizDisplayEl = $('#quiz-content');
let quizResultsEl = $('#quiz-results');
let quizTimerEl = document.querySelector('quizTimer')

//this initializes the quiz function on the click event


  function countDown(){
      //this console logs to check if the function has started. 
            console.log("you started the quiz!");

            
            var timeInterval = setInterval(function() {
                var timeLeft = 240;
                if(timeLeft > 1 ){
                    quizTimerEl.textContent = timeLeft;
                    console.log(timeLeft);
                    timeLeft--;

                } else if (timeLeft === 1 ) {
                    quizTimerEl.textContent = (timeLeft + ' second remaining');
                    timeLeft--;
                } else {
                    quizTimerEl.textContent = 'Times Up!';
                    clearInterval(timeInterval);
                    
                }
            }, 1000);
            
        };

    
            
    function quizFunction(){
        //check to see if second funciton has initialized.
        console.log("second");

        
    };





        
quizButtonEl.addEventListener("click", function(){
    countDown();
    quizFunction();
});