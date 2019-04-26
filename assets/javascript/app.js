$(document).ready(function () {

    //score variables   
    var correct = 0;
    var incorrect = 0;
    var noResponse = 0;

    //time variables
    var clockRunning = false;
    var time;
    var triviaTimer;
    var timeVar;

    //variable used for counting
    var i = 0;

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
        $("#timeLeft").text(time + " seconds remaining")
        time--;
        console.log(time);


        //This is what counts no responses.
        if (time === 0) {
            clearInterval(triviaTimer);
            clockRunning = false;
            console.log('no response');
            noResponse++;
            console.log(noResponse);
            $("#correct").html("No Response");

        }
    }

    //sets timeout for questions will then change page to answer for the slide
    function questionTimeFunction() {
        timeVar = setTimeout(function () {
            displayAnswer(i);
            $("#question").html($("#answer" + i));
            i++;
        }, 5000);
    }

    //sets timeout for answer displays will then change slide to next question
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

    //creates questions page display
    function displayQuestion() {
        $("#correct").empty();
        var questionText = "";
        triviaQuestions.forEach(function (questions, i) {
            questionText += `<div id= "question${i}">
                        <h2> ${questions.question}</h2>
                        <button id="${questions.a}"class = "m-2 questionButton">${questions.a}</button> <br>
                        <button id="${questions.b}"class = "m-2 questionButton">${questions.b}</button> <br>
                        <button id="${questions.c}"class = "m-2 questionButton">${questions.c}</button> <br>
                        <button id="${questions.d}"class = "m-2 questionButton">${questions.d}</button> <br>
                        </div>`;

            time = 5;
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                questionTimeFunction();
                clockRunning = true;

            };


            $("#question").html(questionText);


        });

        //create final results page aka the last question page
        console.log(i + " this is i");
        console.log(triviaQuestions.length);
        if (i >= triviaQuestions.length) {
            stopFunction();
            console.log("DONE!!!");
            //the -5 is becuase currently the answer pages count as no response.
            noResponse = noResponse - 5;
            $("#results").append("<h2> You have reached the end of the game. Congratulations!</h2><div>Correct Answers: " + correct + "</div> <br> <div>Incorrect Answers: " + incorrect + "</div> <br> <div>No Response: " + noResponse + "</div>");
            $("#results").append("<button type='button' class='btn btn-primary mt-5' id='restartButton'>Restart Game</button>");
            $("#timeLeft").hide();
            $("#correct").hide();
        }

    }

    //create answer page display
    function displayAnswer() {
        var answerText = "";
        triviaQuestions.forEach(function (answers, i) {
            answerText += `<div id= "answer${i}">
        <h2 id = "correct-incorrect"> </h2>
        <div class = "m-2">The answer is: ${answers.answer}</div> <br>
        <img src="${answers.answerImage}" alt="${answers.answerImageAlt}" width="150" height="150">
        </div>`;

            time = 3;
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                answerTimeFunction();
                clockRunning = true;
            };

            $("#question").html(answerText);

        });

    }

    //on start button atarts on first question slide
    $("#startButton").on("click", function () {
        $("#startButton").remove();

        // displays question 1
        displayQuestion(i);
        $("#question").html($("#question" + i));

    });


    //if answer button clicked
    $('#question').on("click", ".questionButton", function () {

        //stop timeout and go directly to answer slide
        stopFunction();

        //if correct answer
        if (this.id === triviaQuestions[i].answer) {
            console.log('correct');
            $("#question").prepend("correct");
            correct++;
            console.log(correct);
            $("#correct").html("CORRECT!");
        }

        //if incorrect answer
        else if (this.id !== triviaQuestions[i].answer) {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $("#correct").html("INCORRECT!");
        }


        //shows answer page connected to question
        displayAnswer(i);
        $("#question").html($("#answer" + i));


        //increases i value  and calls answerTimeFunction so that next question slide will be shown
        answerTimeFunction();
        i++;
    });


    //restart button
    $('#results').on("click", "#restartButton", function(){
    
        //get rid of results card
        $('#results').empty();
        $("#timeLeft").show();
        $("#correct").show();

        //score variables   
        correct = 0;
        incorrect = 0;
        noResponse = 0;

        //time variables
        clockRunning = false;
        time = 0;

        //variable used for counting
        i = 0;

        // displays question 1
        displayQuestion(i);
        $("#question").html($("#question" + i));

    });

 










})

