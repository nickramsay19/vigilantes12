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

    {question: 'What inspired Vigilantes?', answer_a: 'Marvel\'s Daredevil series', answer_b: 'Batman and Robin', answer_c: 'Marvel\'s Luke Cage series', answer_d: 'Hunter\'s broken mind'},

    {question: 'Whose outfit is Viper\'s outfit inspired by?', answer_a: 'Iron fist', answer_b: 'Daredevil', answer_c: 'Spiderman', answer_d: 'Batman'},

    {question: 'How does Dexter volunteer?', answer_a: 'At a soup kitchen', answer_b: 'At a pharmacy', answer_c: 'As a bus driver', answer_d: 'As a hooker'},

    {question: 'Which Coleridge quote is central in the Mariner\'s story?', answer_a: '\'I shot the albatross\'', answer_b: '\'Water, water, everywhere\'', answer_c: '\'The fair breeze blew\'', answer_d: '\'As idle a painted ship\''},

    {question: 'Who has \'clownish\' in their qualities?', answer_a: 'Sergeant Riley', answer_b: 'Viper', answer_c: 'DJ Snaggletooth', answer_d: 'Adam Crespo'},

    {question: 'Who wields two giant power fists?', answer_a: 'Gilgamesh', answer_b: 'Red Rhino', answer_c: 'Sir Lancelot', answer_d: 'Doomfist'},

    {question: 'Who is Nitya Rampal in relation to Burning Hand?', answer_a: 'His cousin', answer_b: 'His sister', answer_c: 'His grandmother', answer_d: 'His stepmother'},
    
    {question: 'How long did Viper train for?', answer_a: '5 Years', answer_b: '4 Years', answer_c: '6 Years', answer_d: '3 Years'},
    
    {question: 'What does the Three Eyed Warrior have a tattoo of', answer_a: 'An eye', answer_b: 'A snake', answer_c: 'A dragon', answer_d: 'A sword'},
    
    {question: 'Where is the Lucky Moon Yum Cha?', answer_a: 'Elizabeht Street', answer_b: 'Paddy\'s Market', answer_c: 'George Street', answer_d: 'Tumbalong Park'},
    
    {question: 'What weapon does the Three Eyed Warrior use?', answer_a: 'Monk\'s Spade', answer_b: 'Katana', answer_c: 'Rope Darts', answer_d: 'His Fists'},
     
    {question: 'Where did the Mariner\'s hook come from?', answer_a: 'Taiwanese Pirates', answer_b: 'A car accident', answer_c: 'It was caught in a winch', answer_d: 'Gangrene'},
    
    {question: 'How did Viper meet Luke Wood?', answer_a: 'He intercepted a delivery', answer_b: 'They were introduced', answer_c: 'He was sent a message', answer_d: 'He heard rumours'},
    
    {question: 'Which business tycoon becomes Viper\'s nemesis in Stage 2?', answer_a: 'Lukian Adams', answer_b: 'Major Patton', answer_c: 'Philip Dean', answer_d: 'Oscar Martin'},
    
    {question: 'Which world leader does Viper assasinate?', answer_a: 'Kim Jong Sun', answer_b: 'Donald Trump', answer_c: 'Vladimir Putin', answer_d: 'Tony Abbott'},
    
    {question: 'Where does the Mariner fish?', answer_a: 'The Southern Ocean', answer_b: 'The Pacific Ocean', answer_c: 'The South China Sea', answer_d: 'Syndey Harbour'},
    
    {question: 'What was the name of the dog owned by the Sydney Slasher as a child?', answer_a: 'Marlowe', answer_b: 'Scruffy', answer_c: 'Rumo', answer_d: 'Metallica'},
    
    {question: 'How many times does the Sydney Slasher stab his father?', answer_a: '50', answer_b: '100', answer_c: '13', answer_d: '66'},
    
    {question: 'Where did the Sydney Slasher travel after school?', answer_a: 'Israel', answer_b: 'Russia', answer_c: 'America', answer_d: 'Egypt'},
    
    {question: 'What was the managers name in the video store the Sydney Slasher worked in?', answer_a: 'Guy', answer_b: 'Bruce', answer_c: 'Dwight', answer_d: 'Marx'},
    
    {question: 'How many people did the Slasher kill in his first set?', answer_a: '11', answer_b: '14', answer_c: '9', answer_d: '13'},

    {question: 'What did the Slasher feed on in his coffin?', answer_a: 'Blood', answer_b: 'Nothing', answer_c: 'Worms', answer_d: 'Skin'},
    
    {question: 'Who leads the Sydney Guard?', answer_a: 'Silver Spectre', answer_b: 'Mockingbird', answer_c: 'Viper', answer_d: 'Philip Dean'},
    
    {question: 'Which steroid gives Red Rhino his powers?', answer_a: 'Substax', answer_b: 'Osteopose', answer_c: 'AB3', answer_d: 'Hydropolyglycerin'},
    
    {question: 'Which Velvet Knight is commonly pitted against Silver Spectre?', answer_a: 'Sir Gallahad', answer_b: 'Sir Lancelot', answer_c: 'Sir Bedivere', answer_d: 'Philip Dean'},

    {question: 'Where is the Sydney Guard based?', answer_a: 'North Sydney', answer_b: 'The CBD', answer_c: 'The Eastern Suburbs', answer_d: 'The Inner West'},
    
    {question: 'What is Red Rhino\'s power?', answer_a: 'Growth', answer_b: 'Strength', answer_c: 'Indestructibility', answer_d: 'Speed'},
    
    {question: 'What phobia does the Burning Hand have?', answer_a: 'Spiders', answer_b: 'Heights', answer_c: 'Fire', answer_d: 'Lawnmowers'},
    
    {question: 'Who made Vigilantes?', answer_a: 'Some losers in a dark room', answer_b: 'Your mum', answer_c: 'Peter Dutton', answer_d: 'God made the world therefore...'},
    
    {question: 'What does Viper work as?', answer_a: 'Lawyer', answer_b: 'Comedian', answer_c: 'Accountant', answer_d: 'Snake Whisperer'},
    
    {question: 'Which of the following is the UHMWPE in the Spectre Suit resistant to?', answer_a: 'Microorganisms', answer_b: 'Fire', answer_c: 'Lightning', answer_d: 'Pterodactyls'},
    
    {question: 'What is the maximum density Silver Spectre can pass through?', answer_a: '13kg/m^3', answer_b: '28g/cm^3', answer_c: '110kg/m^3', answer_d: '52g/m^3'},

    {question: 'Which of the following can Silver Spectre not pass through?', answer_a: 'Osmium', answer_b: 'Iron', answer_c: 'Copper', answer_d: 'Argon'},
    
    {question: 'How did Silver Spectre escape from ExoCorp?', answer_a: 'There was a distraction', answer_b: 'Stealth', answer_c: 'He was released', answer_d: 'Jonah Riley broke him out'},
    
    {question: 'What is the Silver Spectre\'s fatal flaw?', answer_a: 'Naivety', answer_b: 'Arrogance', answer_c: 'Laziness', answer_d: 'Stubborness'},
    
    {question: 'Which colour arrow points up in the Silver Spectre symbol?', answer_a: 'Silver', answer_b: 'Blue', answer_c: 'White', answer_d: 'Black'},
    
    {question: 'What do the Silver Spectre\s gloves do?', answer_a: 'Produce electricity', answer_b: 'Keep his hands warm', answer_c: 'Provide grip', answer_d: 'Stick to things'},
    
    {question: 'What/who promised Silver Spectre amazing physical abilities?', answer_a: 'An Informercial', answer_b: 'An ExoCorp Ambassador', answer_c: 'A Brochure', answer_d: 'Red Rhino'},
    
    {question: 'What field of science did Red Rhino study?', answer_a: 'Biotechnology', answer_b: 'Engineering', answer_c: 'Quantum Physics', answer_d: 'Robotics'},
    
    {question: 'What group did Red Rhino join to help release frustration?', answer_a: 'The Wrestling Society', answer_b: 'The Klu Klux Klan', answer_c: 'The Boxing Guild', answer_d: 'The Longying'},
    
    {question: 'What is a negative side effect of Substax?', answer_a: 'Mood Swings', answer_b: 'Anxiety', answer_c: 'Asthma', answer_d: 'Irritated Eyes'},
    
    {question: 'Who is Silver Spectre\s closest friend?', answer_a: 'Red Rhino', answer_b: 'Jonah Riley', answer_c: 'Mockingbird', answer_d: 'DJ Snaggletooth'},
    
    {question: 'What poison coats Philip Dean\s bullets?', answer_a: 'Pufferfish Venom', answer_b: 'Cyanide', answer_c: 'Scorpion Venom', answer_d: 'Cone Shell Venom'},
    
    {question: 'How did Philip Dean\s mother die?', answer_a: 'Cancer', answer_b: 'Car Accident', answer_c: 'Domestic Violence', answer_d: 'Drug Overdose'},
    
    {question: 'Where did the Velvet Knights originate?', answer_a: 'Britain', answer_b: 'Australia', answer_c: 'America', answer_d: 'China'},
    
    {question: 'Which experiment created the Experimentals?', answer_a: 'P-4', answer_b: 'Experiment X', answer_c: 'AB3', answer_d: 'The Spectre Series'},
    
    {question: 'Which religion does Philip Dean follow?', answer_a: 'Catholicism', answer_b: 'Atheism', answer_c: 'Islam', answer_d: 'Buddhism'},
    
    {question: 'Where did DJ Snaggletooth travel after school?', answer_a: 'Costa Rica', answer_b: 'India', answer_c: 'Cambodia', answer_d: 'Bolivia'},
    
    {question: 'What weapon does DJ Snaggletooth use?', answer_a: 'A Blowgun', answer_b: 'His Mixtape', answer_c: 'A Chakram', answer_d: 'A Staff'},
    
    {question: 'What is the Burning Hand\s weapon of choice?', answer_a: 'Bagh Naka', answer_b: 'Joddapuhr', answer_c: 'Boomerangs', answer_d: 'Brak Nagha'},
    
    {question: 'Who was the main catalyst for the transformation to Vigilante Sydney?', answer_a: 'Mike Baird', answer_b: 'Pauline Hansen', answer_c: 'Donald Trump', answer_d: 'Viper'},
    
    {question: 'Since 2016, in what way did Sydney grow?', answer_a: 'Urban Consolidation', answer_b: 'Urban Sprawling', answer_c: 'Gentrification', answer_d: 'Planned Suburban Development'},
    
    {question: 'Who is Darling Harbour important for?', answer_a: 'Smugglers', answer_b: 'Policemen', answer_c: 'The Mariner', answer_d: 'Businessmen'},
    
    {question: 'Which language can Viper speak?', answer_a: 'Mandarin', answer_b: 'Russian', answer_c: 'Cantonese', answer_d: 'Hindi'},
    
    {question: 'Which suburb is encroaching into Darlinghurst?', answer_a: 'Kings Cross', answer_b: 'Chinatown', answer_c: 'Mosman', answer_d: 'Glebe'},
    
    {question: 'What suburb lies below Darlinghurst?', answer_a: 'Downtown', answer_b: 'Underground', answer_c: 'Darlinghurst Zero', answer_d: 'Subway'},
    
    {question: 'What does Mockingbird work as?', answer_a: 'A Forensic Artist', answer_b: 'A Forensic Scientist', answer_c: 'A Policewoman', answer_d: 'A Graphic Designer'},
    
    {question: 'What rank is Jonah Riley as a police officer?', answer_a: 'Sergeant', answer_b: 'Major', answer_c: 'Superintendent', answer_d: 'Detective'},
    
    {question: 'Where did Luke Wood travel for work?', answer_a: 'Germany', answer_b: 'Russia', answer_c: 'China', answer_d: 'England'},
    
    {question: 'Which vigilante was the most difficult to write?', answer_a: 'Mockingbird', answer_b: 'Adam Crespo', answer_c: 'Burning Hand', answer_d: 'Three Eyed Warrior'},
    
    {question: 'Which vigilante was created first?', answer_a: 'Viper', answer_b: 'Silver Spectre', answer_c: 'Burning Hand', answer_d: 'Jack Kitchin'},
    
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
    CorrectPercentageBox.html("Correct: " + CorrectCount);
    CorrectionCountBox.html("Answered: " + QuestionsCompleted);
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
