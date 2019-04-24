$(document).ready(function () {

    //score variables   
    var corrrect = 0;
    var incorrect = 0;
    var noResponse = 0;
    var clockRunning = false;
    var time = 5;
    var triviaTimer;
    var timeVar;
    i = 0;
    j=0;

    //question array of objects
    var triviaQuestions = [
        {
            question: "1?",
            a: "A1",
            b: "B1",
            c: "C1",
            d: "D1",
            answer: "C1",
            answerImage: "assets/images/goat.jpg",
            answerImageAlt: "goat",

        },

        {
            question: "2?",
            a: "A2",
            b: "B2",
            c: "C2",
            d: "D2",
            answer: "A2",
            answerImage: "assets/images/goat.jpg",
            answerImageAlt: "goat",
        },

        {
            question: "3?",
            a: "A3",
            b: "B3",
            c: "C3",
            d: "D3",
            answer: "B3",
            answerImage: "assets/images/goat.jpg",
            answerImageAlt: "goat",
        },

        {
            question: "4?",
            a: "A4",
            b: "B4",
            c: "C4",
            d: "D4",
            answer: "A4",
            answerImage: "assets/images/goat.jpg",
            answerImageAlt: "goat",
        },

        {
            question: "5?",
            a: "A5",
            b: "B5",
            c: "C5",
            d: "D5",
            answer: "D5",
            answerImage: "assets/images/goat.jpg",
            answerImageAlt: "goat",
        },

    ];

    //countdown for timer
    function countDown() {
        time--;
        $("#timeLeft").text(time + " seconds remaining")

        //coult posibly get rid of this oncee we can get it to transition past answer with the button click.
        if (time === 0) {
            clearInterval(triviaTimer);
            clockRunning = false;
        }
    }

    //sets timeout for questions
    function questionTimeFunction() {
        timeVar = setTimeout(function () {
            displayAnswer(i);
            $("#question").html($("#answer" + i));
            i++;
        }, 5000);
    }

    //sets timeout for answer displays
    function answerTimeFunction() {
        timeVar = setTimeout(function () {
            displayQuestion(i);
            $("#question").html($("#question" + i));
            
        }, 3000);
    }

    //clears timeout for question will be called if response button is hit by user
    function stopFunction() {
        clearTimeout(timeVar);
      }

    //creates questions display
    function displayQuestion() {
        var questionText = "";
        triviaQuestions.forEach(function (questions, i) {
            questionText += `<div id= "question${i}">
                        <h2> ${questions.question}</h2>
                        <button class = "m-2 questionButton">${questions.a}</button> <br>
                        <button class = "m-2 questionButton">${questions.b}</button> <br>
                        <button class = "m-2 questionButton">${questions.c}</button> <br>
                        <button class = "m-2 questionButton">${questions.d}</button> <br>
                        </div>`;

            time = 5;
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                questionTimeFunction();
                clockRunning = true;
            };




            $("#question").html(questionText);
        });
    }

    //create answer page display

    function displayAnswer() {
        var answerText = "";
        triviaQuestions.forEach(function (answers, i) {
            answerText += `<div id= "answer${i}">
        <h2> correct or incorrect here</h2>
        <div class = "m-2">The answer is: ${answers.answer}</div> <br>
        <img src="${answers.answerImage}" alt="${answers.answerImageAlt}" width="150" height="150">
        </div>`;

            time = 3;
            console.log(timeVar);
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                answerTimeFunction();
                clockRunning = true;
            };

            $("#question").html(answerText);
        });
    }

    //this will really be the whole game that is started on the click of the button
    $("#startButton").on("click", function () {
        $("#startButton").remove();

        // displays question 1
        displayQuestion(i);
        $("#question").html($("#question" + i));

       


    });


     //if answer button clicked
     $('#question').on("click", ".questionButton", function () {
        stopFunction();
        displayAnswer(i);
        $("#question").html($("#answer" + i));
        console.log(timeVar);
        
    });


    //add what will happen if timer runs out


    //
    //    
    //     




    //if correct answer

    //if incorrect answer


})