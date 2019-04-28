$(document).ready(function () {

    //score variables   
    var correct = 0;
    var incorrect = 0;
    var noResponse = 0;

    //time variables
    var clockRunning = false;
    var time;
    var triviaTimer;
    // var timeVar;
    var isAnswerSelected = false;

    //variable used for counting
    var i = 0;

    //question array of objects
    var triviaQuestions = [
        {
            question: "1. What are the words of House Stark?",
            a: "A1: Is mighty cold up here",
            b: "B1: Winter is coming",
            c: "C1: Only the pack survives the winter",
            d: "D1: King of the north",
            answer: "B1: Winter is coming",
            answerImage: "assets/images/Q1.jpeg",
            answerImageAlt: "Winter is coming",

        },

        {
            question: "2. What animal is in Petyr Baelish's sigil?",
            a: "A2: A mockingbird",
            b: "B2: A weasel",
            c: "C2: A little finger",
            d: "D2: A middle finger",
            answer: "A2: A mockingbird",
            answerImage: "assets/images/Q2.jpg",
            answerImageAlt: "Little Finger is dead joke",
        },

        {
            question: "3. Finish the saying: The night is dark...",
            a: "A3: and swarming with white walkers",
            b: "B3: and full of terror",
            c: "C3: and full of dragons",
            d: "D3: so lets drink by the fire with giant's bane",
            answer: "B3: and full of terror",
            answerImage: "assets/images/Q3.jpg",
            answerImageAlt: "The Red Lady joke",
        },

        {
            question: "4: In Which of these cities did Daenerys Targaryen free people?",
            a: "A4: Astapor",
            b: "B4: Volantis",
            c: "C4: Qarth",
            d: "D4: Pentos",
            answer: "A4: Astapor",
            answerImage: "assets/images/Q4.jpg",
            answerImageAlt: "Daenerys joke",
        },

        {
            question: "What are House Lannister's words?",
            a: "A5: Family First",
            b: "B5: I wouldn't trust me if I were you",
            c: "C5: A Lannister Always Pays His Debts",
            d: "D5: Hear Me Roar!",
            answer: "D5: Hear Me Roar!",
            answerImage: "assets/images/Q5.jpg",
            answerImageAlt: "Lanister joke",
        },

    ];

    //stops the clock
    function stopClock(){
        clearInterval(triviaTimer);
        clockRunning = false;
    }

    //countdown for timer
    function countDown() {
        $("#timeLeft").text(time + " seconds remaining")
        time--;


        //This is what counts no responses and then changes it to the answer slide.
        if(time === 0 && !isAnswerSelected) {
            stopClock();

            noResponse++;
            $("#correct").html("No Response");

            displayAnswer(i);
            i++;
            isAnswerSelected = true;

        }

        //this displays question when answer slide times out
        else if(time === 0 && isAnswerSelected) {
            stopClock();

            displayQuestion(i);
        

        }
    }

    //creates questions page display
    function displayQuestion() {
        $("#correct").empty();
        var questionText = "";
        if (i<triviaQuestions.length){
        var questions = triviaQuestions[i];
            questionText += `<div id= "question${i}">
                        <h2 class="mb-5"> ${questions.question}</h2>
                        <button id="${questions.a}"class = "m-2 questionButton btn btn-dark btn-block">${questions.a}</button> <br>
                        <button id="${questions.b}"class = "m-2 questionButton btn btn-dark btn-block">${questions.b}</button> <br>
                        <button id="${questions.c}"class = "m-2 questionButton btn btn-dark btn-block">${questions.c}</button> <br>
                        <button id="${questions.d}"class = "m-2 questionButton btn btn-dark btn-block">${questions.d}</button> <br>
                        </div>`;

            time = 5;
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                clockRunning = true;
            };

            $("#question").html(questionText);
            isAnswerSelected = false;
    }

        //create final results page aka the last question page
        else{
            stopClock();

            $("#question").empty();

            $("#results").append("<h2> You have reached the end of the game. Congratulations!</h2><div>Correct Answers: " + correct + "</div> <br> <div>Incorrect Answers: " + incorrect + "</div> <br> <div>No Response: " + noResponse + "</div>");
            $("#results").append("<button type='button' class='btn btn-dark mt-5' id='restartButton'>Restart Game</button>");
            $("#timeLeft").hide();
            $("#correct").hide();
        }

    }

    //create answer page display
    function displayAnswer() {
        var answerText = "";
        var answers = triviaQuestions[i];
        answerText += `<div id= "answer${i}">
        <h2 id = "correct-incorrect"> </h2>
        <div class = "m-2">The answer is: ${answers.answer}</div> <br>
        <img src="${answers.answerImage}" alt="${answers.answerImageAlt}">
        </div>`;

            time = 3;
            if (!clockRunning) {
                triviaTimer = setInterval(countDown, 1000);
                clockRunning = true;
            };

            $("#question").html(answerText);
    }

    //on start button atarts on first question slide
    $("#startButton").on("click", function () {
        $("#startButton").remove();
        $("#throne").remove();

        // displays question 1
        displayQuestion(i);

    });


    //if answer button clicked
    $('#question').on("click", ".questionButton", function () {

        isAnswerSelected = true;
        stopClock();

        //if correct answer
        if (this.id === triviaQuestions[i].answer) {
            correct++;
            $("#correct").html("CORRECT!");
        }

        //if incorrect answer
        else if (this.id !== triviaQuestions[i].answer) {
            incorrect++;
            $("#correct").html("INCORRECT!");
        }

        //shows answer page connected to question
        displayAnswer(i);

        //increases i value  so that the next question will be called when thee answer is done displaying
        i++;
    });


    //restart button
    $('#results').on("click", "#restartButton", function(){
    
        //get rid of results card
        $('#results').empty();
        $("#timeLeft").show();
        $("#correct").show();

        //score variables back to 0  
        correct = 0;
        incorrect = 0;
        noResponse = 0;

        //time variables bakc to 0 and not running
        clockRunning = false;
        time = 0;

        //variable used for counting
        i = 0;

        // displays question 1
        displayQuestion(i);

    });

})

