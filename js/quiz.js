//Elements
var QuestionBox = $("#quiz-question");
var CorrectionBox = $("#quiz-correct");
var CorrectionCountBox= $("#quiz-correct-count");
var CorrectPercentageBox = $("#quiz-correct-percentage");

var AnswerA = $(".quiz-answer-a");
var AnswerB = $(".quiz-answer-b");
var AnswerC = $(".quiz-answer-c");
var AnswerD = $(".quiz-answer-d");

//Question List
var Questions = [
    {question: 'Which of Dexter\'s family members died?', answer_a: 'His mother', answer_b: 'His father', answer_c: 'Both his parents', answer_d: 'His son'},

    {question: 'What inspired Vigilantes?', answer_a: 'Marvel\'s Daredevil series', answer_b: 'Batman and Robin', answer_c: 'Marvel\'s Luke Cage series', answer_d: 'Hunters broken mind'},

    {question: 'Whose outfit is Viper\'s outfit inspired by?', answer_a: 'Iron fist', answer_b: 'Daredevil', answer_c: 'Spiderman', answer_d: 'Batman'},

    {question: 'How does Dexter volunteer?', answer_a: 'At a soup kitchen', answer_b: 'At a pharmacy', answer_c: 'As a bus driver', answer_d: 'As a hooker'},

    {question: 'Which Coleridge quote is central in the Mariner\'s story?', answer_a: '\'I shot the albatross\'', answer_b: '\'Water, water, everywhere\'', answer_c: '\'The fair breeze blew\'', answer_d: '\'As idle a painted ship\''},

    {question: 'Who has \'clownish\' in their qualities?', answer_a: 'Sergeant Riley', answer_b: 'Viper', answer_c: 'DJ Snaggletooth', answer_d: 'Adam Crespo'},

    {question: 'Who wields two giant power fists?', answer_a: 'Gilgamesh', answer_b: 'Red Rhino', answer_c: 'Sir Lancelot', answer_d: 'Doomfist'},

    {question: 'Who is Nitya Rampal in relation to Burning Hand?', answer_a: 'His cousin', answer_b: 'His sister', answer_c: 'His grandmother', answer_d: 'His stepmother'}
];

//Variables
var CorrectCount = 0;
var QuestionsCompleted = 0;
var Correct = false;
var ChosenQuestion = Questions[0];

//On Answer Click
$(".quiz-answer").click(function(){
    if($(this).hasClass("quiz-answer-a") && ChosenQuestion.answer_a == AnswerA.html()){
        Correct = true;
        CorrectCount++;
    }
    else if($(this).hasClass("quiz-answer-b") && ChosenQuestion.answer_a == AnswerB.html()){
        Correct = true;
        CorrectCount++;
    }
    else if($(this).hasClass("quiz-answer-c") && ChosenQuestion.answer_a == AnswerC.html()){
        Correct = true;
        CorrectCount++;
    }
    else if($(this).hasClass("quiz-answer-d") && ChosenQuestion.answer_a == AnswerD.html()){
        Correct = true;
        CorrectCount++;
    }
    else{
        Correct = false;
    }

    //Add to questions asked
    QuestionsCompleted++;

    //Display Correction
    CorrectionBox.html(Correct ? 'You got that <span class=".has-text-success">Correct</span>' : 'You got that <span class=".has-text-danger">Incorrect</span>');

    ChosenQuestion = Questions[Math.floor((Math.random() * Questions.length))];
    FillQuiz(ChosenQuestion);
    CorrectPercentageBox.html("Correct questions: " + CorrectCount);
    CorrectionCountBox.html("Questions answered: " + QuestionsCompleted);
});

//On Start Game Click
$(".quiz-start").click(function(){
    $("#quiz-title").fadeOut(200, function(){
        ResetPageSelection();
        $("#quiz-game").fadeIn(200, function(){});
        CorrectCount = 0;
        QuestionsCompleted = 0;
    })
});

//Fill Quiz With Question
function FillQuiz(object){
    var Answers = [object.answer_a, object.answer_b, object.answer_c, object.answer_d];
    Answers = Shuffle(Answers);
    AnswerA.html(Answers[0]);
    AnswerB.html(Answers[1]);
    AnswerC.html(Answers[2]);
    AnswerD.html(Answers[3]);
    QuestionBox.html(object.question);
}

//Shuffle Array
function Shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function ResetQuestionsArray(){
    for(x = 0; x < Questions.length; x++){
        Questions[x].used = false;
    }
}

//Start Game
ChosenQuestion = Questions[Math.floor((Math.random() * Questions.length))];
FillQuiz(ChosenQuestion);

//Math.floor((Math.random() * Questions.length))
