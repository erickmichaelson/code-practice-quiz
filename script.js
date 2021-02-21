//this variable calls in from the html using jQuery
let quizButtonEl = $('#start-quiz');
let quizDisplayEl = $('#quiz-content');
let quizResultsEl = $('#quiz-results');
let quizTimerEl = $('#quiz-timer');

//this initializes the quiz function on the click event
quizButtonEl.on('click', function() {
        //this was to check that the function started
        console.log("you started the quiz!")

        function countDown(){
            setInterval(function()){
                if(timeLeft <= 0 ){
                    clearInterval(timeLeft=0)
                }
                quizTimerEl.text("#quiz-results") =timeLeft
                time -=1
            } ,1000)
        }
        
    return
});
