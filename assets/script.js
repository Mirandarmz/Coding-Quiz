var startButton = document.getElementById("start");
var content = document.getElementById("content");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answer1b = document.getElementById("answer1");
var answer2b = document.getElementById("answer2");
var answer3b = document.getElementById("answer3");
var answer4b = document.getElementById("answer4");
var feedback = document.getElementById("feedback");
var initialsText = document.getElementById("initials");
var sumbit = document.getElementById("submit");
var highscoresList = document.getElementById("highscoresList");
var highscoresSection = document.getElementById("highscores");
var clear = document.getElementById("clear");
var playAgain = document.getElementById("playAgain");

answer1b.style.display="none";
answer2b.style.display="none";
answer3b.style.display="none";
answer4b.style.display="none";
initials.style.display="none";
sumbit.style.display="none";
highscoresSection.style.opacity=0;

startButton.addEventListener("click",function(event){
    content.textContent="";
    start();
    quiz();
})

var secondsLeft = 10;
var questions=["Which of the following is not a loop","________ is the process of finding errors in a program and fixing them","Which of the following is not a primitive data type","Which command logs to console","What does DRY mean"];
var options=["for","while","if/else","do-while","Compiling","Debugging","Executing","Scanning","Boolean","Key","String","Integer","Console.print()","Console.show()","Console.display()","Console.log()","Do not repeat yourself","Dry your computer","Dry your code","Do resourceful yamming"];
var answers=[0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0];
var score;

function start(){
    content.textContent="";
    startButton.style.display="none";
    answer1b.style.display="inline";
    answer2b.style.display="inline";
    answer3b.style.display="inline";
    answer4b.style.display="inline";
    
    question.textContent=questions[0];
    answer1b.textContent=options[0];
    answer2b.textContent=options[1];
    answer3b.textContent=options[2];
    answer4b.textContent=options[3];
    
    score=0;
}
 
var timerInterval;

function quiz(){
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

    
    answer1b.addEventListener("click",function(){
        if(answers[i*4]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        if(secondsLeft <= 0) {
            content.textContent="Time's up!";
            clearInterval(timerInterval);
            endQuiz();
            return;
        }
        i++;
        if(i==questions.length){
            clearInterval(timerInterval);
            endQuiz();
            return;
        }else{
            question.textContent=questions[i];
            answer1b.textContent=options[i*4];
            answer2b.textContent=options[(i*4)+1];
            answer3b.textContent=options[(i*4)+2];
            answer4b.textContent=options[(i*4)+3];
        }
    })

    answer2b.addEventListener("click",function(){
        if(answers[(i*4)+1]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect";
        }
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            content.textContent="Time's up!";
            // Calls function end game
            endQuiz();
            return;
        }
        i++;
        if(i==questions.length){
            clearInterval(timerInterval);
            endQuiz();
            return;
        }else{
            question.textContent=questions[i];
            answer1b.textContent=options[i*4];
            answer2b.textContent=options[(i*4)+1];
            answer3b.textContent=options[(i*4)+2];
            answer4b.textContent=options[(i*4)+3];
        }
    })

    answer3b.addEventListener("click",function(){
        if(answers[(i*4)+2]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            content.textContent="Time's up!";
            clearInterval(timerInterval);
            // Calls function end game
            endQuiz();
            return;
        }
        i++;
        if(i==questions.length){
            clearInterval(timerInterval);
            endQuiz();
            return;
        }else{
            question.textContent=questions[i];
            answer1b.textContent=options[i*4];
            answer2b.textContent=options[(i*4)+1];
            answer3b.textContent=options[(i*4)+2];
            answer4b.textContent=options[(i*4)+3];
        }
    })

    answer4b.addEventListener("click",function(){
        if(answers[(i*4)+3]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            content.textContent="Time's up!";
            clearInterval(timerInterval);
            // Calls function end game
            endQuiz();
            return;
        }
        i++;
        if(i==questions.length){
            clearInterval(timerInterval);
            endQuiz();
            return;
        }else{
            question.textContent=questions[i];
            answer1b.textContent=options[i*4];
            answer2b.textContent=options[(i*4)+1];
            answer3b.textContent=options[(i*4)+2];
            answer4b.textContent=options[(i*4)+3];
        }
    })

}



function endQuiz(){
    question.textContent="The game has ended!";
    timer.textContent="";
    answer1b.style.display="none";
    answer2b.style.display="none";
    answer3b.style.display="none";
    answer4b.style.display="none";
    feedback.textContent="Score: " +score;
    initials.style.display="inline";
    initialsText.textContent="Enter your initials";
    sumbit.style.display="inline";
    timer.textContent="";
    highscoresSection.style.opacity="100%";
}


var highscores = [];

function renderInitials() {
    highscoresList.innerHTML = ""; 
    
    highscores.sort( ({score:a}, {score:b}) => b-a );

    for (var i = 0; i < highscores.length; i++) {
      var highscore = highscores[i];
      
      var li = document.createElement("li");
      li.textContent = (i+1) + ". " + highscore.initials + " | " + highscore.score;
      li.setAttribute("data-index", i);
  
  
      highscoresList.appendChild(li);
    }
  }

 
  


function init() {
  var storedScores = JSON.parse(localStorage.getItem("highscores"));
  console.log(storedScores);

  if (storedScores !== null) {
    highscores = storedScores;
  }

  renderInitials();
}


sumbit.addEventListener("click", function(event) {
    var scoreText = initialsText.value.trim();
    
    var scores = {
        initials: scoreText,
        score: score
    };

    
    if (scoreText === "") {
        return;
    }
    
    highscores.push(scores);
    initialsText.value = "";
    
    localStorage.setItem("highscores", JSON.stringify(highscores));
  renderInitials();
});

init();

clear.addEventListener("click",function(){
    localStorage.clear();
    while(highscoresList.firstChild){
        highscoresList.removeChild(highscoresList.firstChild);
    }
})

playAgain.addEventListener("click",function(){
    location.reload();
})
