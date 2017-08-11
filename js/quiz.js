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
    
    {question: 'How did Mockingbird defeat the Sydney Slasher?', answer_a: 'Pushed him off a roof', answer_b: 'Shot him', answer_c: 'Called the police for help', answer_d: 'Led him into a trap'},
    
    {question: 'What does /Longying\ translate to?', answer_a: 'Shadow Dragon', answer_b: 'Dark Viper', answer_c: 'Night Sword', answer_d: 'Dragon Claw'},
    
    {question: 'Which weapon is not used by the Longying?', answer_a: 'Dagger', answer_b: 'Bow', answer_c: 'Rope Dart', answer_d: 'Staff'},
    
    {question: 'What is on the second floor of Paddy\s Markets?', answer_a: 'A Storeroom', answer_b: 'A Restaurant', answer_c: 'Dormitories', answer_d: 'A Training Centre'},
    
    {question: 'Which item does Jonah not carry with him?', answer_a: 'Speedometer', answer_b: 'Taser', answer_c: 'Torch', answer_d: 'Radio'},
    
    {question: 'Who served as inspiration for Jonah Riley?', answer_a: 'Cleaver Greene', answer_b: 'Walter White', answer_c: 'John McClane', answer_d: 'Diane Pizzaro'},
    
    {question: 'When were the Velvet Knights formed?', answer_a: '1965', answer_b: '2001', answer_c: '1987', answer_d: '2016'},
    
    {question: 'Who leads the Velvet Knights?', answer_a: 'Alastair Hughes', answer_b: 'Jack Jameson', answer_c: 'Sophie King', answer_d: 'Robert Muldoon'},
    
    {question: 'Which is a dart not used by DJ Snaggletooth?', answer_a: 'Explosive Dart', answer_b: 'Flare Dart', answer_c: 'Electric Dart', answer_d: 'Tracker Dart'},
    
    {question: 'Who has the highest score in agility?', answer_a: 'DJ Snaggletooth', answer_b: 'Burning Hand', answer_c: 'Viper', answer_d: 'Ruby Keeler-Milne'},
    
    {question: 'What did DJ Snaggletooth work as after school?', answer_a: 'A Wildlife Photographer', answer_b: 'A DJ', answer_c: 'A Stuntman', answer_d: 'A Vlogger'},
    
    {question: 'Where are the Bondi Boys based?', answer_a: 'Bondi Junction', answer_b: 'Bondi Beach', answer_c: 'Mexico City', answer_d: 'Bondi RSL Club'},
    
    {question: 'Which tribe did DJ Snaggletooth befriend?', answer_a: 'The Cabecar', answer_b: 'The Sentinelese', answer_c: 'The Mascho Piro', answer_d: 'The Cabellos Largos'},
    
    {question: 'What is the diameter of Burning Hand\s chakram?', answer_a: '30cm', answer_b: '25cm', answer_c: '15cm', answer_d: '10cm'},
    
    {question: 'Which martial art does the Burning Hand practice?', answer_a: 'Taekwondo', answer_b: 'Karate', answer_c: 'Changquan', answer_d: 'Krav Maga'},
    
    {question: 'What is the furthest the Burning Hand can throw his chakram?', answer_a: '60m', answer_b: '10m', answer_c: '40m', answer_d: '25m'},
    
    {question: 'Which gang did the Burning Hand join in Kolkata?', answer_a: 'The Tigers', answer_b: 'The Wrestling Society', answer_c: 'The Kolkata Cutters', answer_d: 'The Triad'},
    
    {question: 'Which problem affected the Burning Hand in his youth?', answer_a: 'Sweating', answer_b: 'Hair Loss', answer_c: 'Autism', answer_d: 'Headaches'},
    
    {question: 'What is the Burning Hand\s ultimate goal?', answer_a: 'Climb the Himalayas', answer_b: 'Bring back his father', answer_c: 'Destroy the Comancheros', answer_d: 'Get laid'},
    
    {question: 'Who did the Burning Hand fall in love with?', answer_a: 'Asri Nanda', answer_b: 'Amelia Dharkur', answer_c: 'Raj Rampal', answer_d: 'Masara Landi'},
    
    {question: 'Which family member did Burning Hand kill?', answer_a: 'Eshan Rampal', answer_b: 'Raj Rampal', answer_c: 'Kym Rampal', answer_d: 'Rahel Rampal'},
    
    {question: 'What is the maximum age for Bondi Boys?', answer_a: '30', answer_b: '12', answer_c: '24', answer_d: '35'},
    
    {question: 'Who takes over the Bondi Boys after their previous leader\s death?', answer_a: 'Harley Fogul', answer_b: 'Ash Newman', answer_c: 'DJ Snaggletooth', answer_d: 'Brian Hunt'},
    
    {question: 'What power does the Silver Spectre have?', answer_a: 'Intangibility', answer_b: 'Invisibility', answer_c: 'Emotional Perception', answer_d: 'Precognition'},
    
    {question: 'Which vigilante is a skilled parkourist?', answer_a: 'DJ Snaggletooth', answer_b: 'Burning Hand', answer_c: 'Red Rhino', answer_d: 'Dexter Barker'},
    
    {question: 'What is Burning Hand\s mother\s name?', answer_a: 'Catherine', answer_b: 'Kim', answer_c: 'Barbara', answer_d: 'Sonia'},
    
    {question: 'Where is Burning Hand\s family from?', answer_a: 'Kolkata', answer_b: 'Delhi', answer_c: 'Mumbai', answer_d: 'Kathmandu'},
    
    {question: 'Who was the first Arthur of the Velvet Knights?', answer_a: 'Felix Laycock', answer_b: 'Alastair Hughes', answer_c: 'Caleb Perry', answer_d: 'Gareth Myman'},
    
    {question: 'What does Major Patton use?', answer_a: 'BraveHelm Alpha', answer_b: 'BraveHelm Beta', answer_c: 'BraveHelm+', answer_d: 'BraveHelmet'},
    
    {question: 'What artillery weapon is located at Fort Darling?', answer_a: 'Howitzer', answer_b: 'Mortar', answer_c: 'Cannon', answer_d: 'Trebuchet'},
    
    {question: 'Which type of drone can be found at Fort Darling?', answer_a: 'Skylark', answer_b: 'Sentinel', answer_c: 'Predator', answer_d: 'Hermes'},
    
    {question: 'Does Fort Darling have a tank?', answer_a: 'No', answer_b: 'Yes', answer_c: 'I didn\t read the article', answer_d: 'No, it has a submarine'},
    
    {question: 'What sport did Major Patton play in his youth?', answer_a: 'AFL', answer_b: 'Soccer', answer_c: 'Golf', answer_d: 'Shooting'},
    
    {question: 'Where did Major Patton fight?', answer_a: 'Afghanistan', answer_b: 'Vietnam', answer_c: 'Iraq', answer_d: 'Syria'},
    
    {question: 'Which friend did Major Patton kill?', answer_a: 'Captain Grove', answer_b: 'Private Ryan', answer_c: 'Corporal Stokes', answer_d: 'Private Walters'},
    
    {question: 'Who first designed the BraveHelm?', answer_a: 'DARPA', answer_b: 'ExoCorp', answer_c: 'The US Army', answer_d: 'NASA'},
    
    {question: 'Which vehicle does Dexter Barker drive?', answer_a: 'A Bus', answer_b: 'A Motorcycle', answer_c: 'A Taxi', answer_d: 'A Mech'},
    
    {question: 'Who is the Director', answer_a: 'Daniel Watson', answer_b: 'Dexter Barker', answer_c: 'Nitya Rampal', answer_d: 'Philip Dean'},
    
    {question: 'What is Mr Ly\s first name?', answer_a: 'Ben', answer_b: 'Dong', answer_c: 'Jude', answer_d: 'Dan'},
    
    {question: 'Why was Mr Ly dishonoured?', answer_a: 'He was gay', answer_b: 'He killed someone', answer_c: 'He betrayed his family', answer_d: 'He stole from the king'},
    
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
