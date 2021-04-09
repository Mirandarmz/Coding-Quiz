var startButton = document.getElementById("start");
var content = document.getElementById("content");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answer1b = document.getElementById("answer1");
var answer2b = document.getElementById("answer2");
var answer3b = document.getElementById("answer3");
var answer4b = document.getElementById("answer4");
var feedback = document.getElementById("feedback");
var initials = document.getElementById("initials");
var initialsText = document.getElementById("initialsText");
var sumbit = document.getElementById("submit");

answer1b.style.display="none";
answer2b.style.display="none";
answer3b.style.display="none";
answer4b.style.display="none";
initials.style.display="none";
sumbit.style.display="none";

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
        clickedAnswers=[true,false,false,false];
        if(answers[i*4]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        i++;
        question.textContent=questions[i];
        answer1b.textContent=options[i*4];
        answer2b.textContent=options[(i*4)+1];
        answer3b.textContent=options[(i*4)+2];
        answer4b.textContent=options[(i*4)+3];
    })

    answer2b.addEventListener("click",function(){
        clickedAnswers=[false,true,false,false];
        if(answers[(i*4)+1]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect";
        }
        i++;
        question.textContent=questions[i];
        answer1b.textContent=options[i*4];
        answer2b.textContent=options[(i*4)+1];
        answer3b.textContent=options[(i*4)+2];
        answer4b.textContent=options[(i*4)+3];
    })

    answer3b.addEventListener("click",function(){
        clickedAnswers=[false,false,true,false];
        if(answers[(i*4)+2]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        i++;
        question.textContent=questions[i];
        answer1b.textContent=options[i*4];
        answer2b.textContent=options[(i*4)+1];
        answer3b.textContent=options[(i*4)+2];
        answer4b.textContent=options[(i*4)+3];
    })

    answer4b.addEventListener("click",function(){
        clickedAnswers=[false,false,false,true];
        if(answers[(i*4)+3]==1){
            score++;
            feedback.textContent="Correct!";
        }else{
            secondsLeft=secondsLeft-10;
            feedback.textContent="Incorrect!";
        }
        i++;
        question.textContent=questions[i];
        answer1b.textContent=options[i*4];
        answer2b.textContent=options[(i*4)+1];
        answer3b.textContent=options[(i*4)+2];
        answer4b.textContent=options[(i*4)+3];
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

    timer.textContent("");
}

function renderInitials() {
    // TODO: Retrieve the last email and password and render it to the page
    userEmailSpan.textContent=localStorage.getItem("myEmail");
    userPasswordSpan.textContent=localStorage.getItem("myPassword");
  }
  
  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
  
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
    localStorage.setItem("myEmail",email);
    localStorage.setItem("myPassword",password);
  
    renderLastRegistered();
  
    }
  });