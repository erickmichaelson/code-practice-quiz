//this variable calls in from the html using jQuery
let quizButtonEl = document.querySelector('#start-quiz');
let quizDisplayEl = $('#quiz-content');
let quizResultsEl = $('#quiz-results');
let quizTimerEl = document.querySelector('#quizTimer')

let choice = [];

//this is the array of questions 
let questions = [{
    question: "What is the first Querstoin",
    choices: ["fist answer","secned answer","thid answer","foursh answer"],
    correct: 3
},
{
    question: "What is the first Querstoin",
    choices: ["first answer","second answer","third answer","fourth answer"],
    correct: 1
},
{
    question: "What is the first Querstoin",
    choices: ["first answer","second answer","third answer","fourth answer"],
    correct: 3
},
{
    question: "What is the first Querstoin",
    choices: ["first answer","second answer","third answer","fourth answer"],
    correct: 0
},
{
    question: "What is the first Querstoin",
    choices: ["first answer","second answer","third answer","fourth answer"],
    correct: 2
},
{
    question: "What is the first Querstoin",
    choices: ["first answer","second answer","third answer","fourth answer"],
    correct: 2
}
];



function checkAnswer(){

}

//this initializes the quiz function on the click event


  function countDown(){
      //this console logs to check if the function has started. 
            console.log("you started the quiz!");

            
            var timeInterval = setInterval(function() {

                var timeLeft = 240;
                quizTimerEl.appendChild = timeLeft;
                if(timeLeft > 1 ){ 
                    
                    // quizTimerEl.textContent = timeLeft;
                    quizTimerEl.appendChild() = timeLeft;
                    console.log(timeLeft);
                   timeLeft--;

                // } else if (timeLeft === 1 ) {
                //     quizTimerEl.textContent = (timeLeft + ' second remaining');
                //     timeLeft--;
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