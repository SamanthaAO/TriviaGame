$(document).ready(function () {

//score variables   
    var corrrect = 0;
    var incorrect = 0;
    var noResponse = 0;
    var clockRunning = false;
    var time = 30;
    var triviaTimer;

//question variables
    var triviaQuestions = [
        {
            question: "1?",
            a: "A1",
            b: "B1",
            c: "C1",
            d: "D1",
            answer: "c",
        },

        {
            question: "2?",
            a: "A2",
            b: "B2",
            c: "C2",
            d: "D2",
            answer: "a",
        },

        {
            question: "3?",
            a: "A3",
            b: "B3",
            c: "C3",
            d: "D3",
            answer: "b",
        },

        {
            question: "4?",
            a: "A4",
            b: "B4",
            c: "C4",
            d: "D4",
            answer: "a",
        },

        {
            question: "5?",
            a: "A5",
            b: "B5",
            c: "C5",
            d: "D5",
            answer: "d",
        },

    ];

//countdown for timer
function countDown(){
    time--;
    $("#timeLeft").text(time + " seconds remaining")
    
}
//creates questions display
function displayQuestion () {
    var questionText = "";
    triviaQuestions.forEach(function (questions, i){
        questionText += `<div id= "question${i}">
                        <h2> ${questions.question}</h2>
                        <div>${questions.a}</div>
                        <div>${questions.b}</div>
                        <div>${questions.c}</div>
                        <div>${questions.d}</div>
                        </div>`;


        if (!clockRunning) {
            triviaTimer = setInterval(countDown, 1000);
            clockRunning = true;
        };

         $("#question").html(questionText);
    
    });

//create answer page display

    

}

//this will really be the whole game that is started on the click of the button
    $("#startButton").on("click", function () {
        $("#startButton").remove();
        
        i = 0;
        displayQuestion(i);
        $("#question").html($("#question" + i));
        i++;

    });
//add what will happen if timer runs out

//if correct answer

//if incorrect answer
    

})