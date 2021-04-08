var startButton = document.getElementById("start");
var content = document.getElementById("content");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answer1b = document.getElementById("answer1");
var answer2b = document.getElementById("answer2");
var answer3b = document.getElementById("answer3");
var answer4b = document.getElementById("answer4");

startButton.addEventListener("click",function(event){
    content.textContent="";
    //setTime();
    quiz();
})

var secondsLeft = 70;

function quiz(){
    var questions=["Which of the following is not a loop","An exception is ________","Which of the following is not a primitive data type","Which command logs to console","What does DRY mean"];
    var options=["for","while","if/else","do-while","Runtime error","Compile time error","Logical error","None of the above","Boolean","Key","String","Integer","Console.print()","Console.show()","Console.display()","Console.log()","Do not repeat yourself","Dry your computer","Dry your code","Do resourceful yamming"];
    var answers=[0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0];
    var score=0;
    var i=0;
    
    //startButton.style.display="none";
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft + " seconds";
        
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            content.textContent="Time's up!";
            clearInterval(timerInterval);
            // Calls function end game
            endQuiz();
        }
        
        
    }, 1000);
    
    var i=0;
    question.textContent=questions[i];
    answer1b.textContent=options[i*4];
    answer2b.textContent=options[(i*4)+1];
    answer3b.textContent=options[(i*4)+2];
    answer4b.textContent=options[(i*4)+3];

    startButton.textContent="Next";
    startButton.addEventListener("click",function(){
        i++;
        question.textContent=questions[i];
        answer1b.textContent=options[i*4];
        answer2b.textContent=options[(i*4)+1];
        answer3b.textContent=options[(i*4)+2];
        answer4b.textContent=options[(i*4)+3];
    });

    //while(i<questions.length){
        //question.textContent=questions[i];
        //answer1b.textContent=options[i*4];
        //answer2b.textContent=options[(i*4)+1];
        //answer3b.textContent=options[(i*4)+2];
        //answer4b.textContent=options[(i*4)+3];

        //console.log(i);
        
        //console.log(score);
        
        //i++;
   // }
    answer1b.addEventListener("click",function(){
        clickedAnswers=[true,false,false,false];
        if(answers[i*4]==1){
            score++;
            console.log(score);
        }else{
            secondsLeft=secondsLeft-10;
        }
    })
    answer2b.addEventListener("click",function(){
        clickedAnswers=[false,true,false,false];
        if(answers[(i*4)+1]==1){
            score++;
            console.log(score);
        }else{
            secondsLeft=secondsLeft-10;
        }
    })
    answer3b.addEventListener("click",function(){
        clickedAnswers=[false,false,true,false];
        if(answers[(i*4)+2]==1){
            score++;
            console.log(score);
        }else{
            secondsLeft=secondsLeft-10;
        }
    })
    answer4b.addEventListener("click",function(){
        clickedAnswers=[false,false,false,true];
        if(answers[(i*4)+3]==1){
            score++;
            console.log(score);
        }else{
            secondsLeft=secondsLeft-10;
        }
    })
    
}


function endQuiz(){
    content.textContent="The game has ended";
    timer.textContent="";
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft + " seconds";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      content.textContent="Time's up!";
      clearInterval(timerInterval);
      // Calls function end game
      endGame();
    }
    

  }, 1000);}