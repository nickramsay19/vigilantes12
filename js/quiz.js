//Dependencies
var $ = require('jquery');
require('./script.js');

//Elements
var QuestionBox = $("#quiz-question");
var NextButton = $("#next-button");
var AnswerA = $(".quiz-answer-a");
var AnswerB = $(".quiz-answer-b");
var AnswerC = $(".quiz-answer-c");
var AnswerD = $(".quiz-answer-d");


var ProgressBar = $('#quiz-progress');
var CorrectionBox = $("#quiz-correct");
var CorrectionCountBox= $("#quiz-correct-count");
var CorrectPercentageBox = $("#quiz-correct-percentage");

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

    {question: 'Where is the Lucky Moon Yum Cha?', answer_a: 'Elizabeth Street', answer_b: 'Paddy\'s Market', answer_c: 'George Street', answer_d: 'Tumbalong Park'},

    {question: 'What weapon does the Three Eyed Warrior use?', answer_a: 'Monk\'s Spade', answer_b: 'Katana', answer_c: 'Rope Darts', answer_d: 'His Fists'},

    {question: 'Where did the Mariner\'s hook come from?', answer_a: 'Taiwanese Pirates', answer_b: 'A car accident', answer_c: 'It was caught in a winch', answer_d: 'Gangrene'},

    {question: 'How did Viper meet Luke Wood?', answer_a: 'He intercepted a delivery', answer_b: 'They were introduced', answer_c: 'He was sent a message', answer_d: 'He heard rumours'},

    {question: 'Which business tycoon became Viper\'s nemesis in Stage 2?', answer_a: 'Lukian Adams', answer_b: 'Major Patton', answer_c: 'Philip Dean', answer_d: 'Oscar Martin'},

    {question: 'Which world leader does Viper assasinate?', answer_a: 'Kim Jong Sun', answer_b: 'Donald Trump', answer_c: 'Vladimir Putin', answer_d: 'Tony Abbott'},

    {question: 'Where does the Mariner fish?', answer_a: 'The Southern Ocean', answer_b: 'The Pacific Ocean', answer_c: 'The South China Sea', answer_d: 'Sydney Harbour'},

    {question: 'What was the name of the dog owned by the Sydney Slasher as a child?', answer_a: 'Marlowe', answer_b: 'Scruffy', answer_c: 'Rumo', answer_d: 'Metallica'},

    {question: 'Where did the Sydney Slasher travel after school?', answer_a: 'Israel', answer_b: 'Russia', answer_c: 'America', answer_d: 'Egypt'},

    {question: 'What was the managers name in the video store the Sydney Slasher worked in?', answer_a: 'Guy', answer_b: 'Bruce', answer_c: 'Dwight', answer_d: 'Marx'},

    {question: 'How many people did the Slasher kill in his first set?', answer_a: '6', answer_b: '11', answer_c: '9', answer_d: '7'},

    {question: 'Who leads the Sydney Guard?', answer_a: 'Silver Spectre', answer_b: 'Echo 59', answer_c: 'Viper', answer_d: 'Philip Dean'},

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

    {question: 'What does Echo 59 work as?', answer_a: 'A Forensic Artist', answer_b: 'A Forensic Scientist', answer_c: 'A Policewoman', answer_d: 'A Graphic Designer'},

    {question: 'What rank is Jonah Riley as a police officer?', answer_a: 'Sergeant', answer_b: 'Major', answer_c: 'Superintendent', answer_d: 'Detective'},

    {question: 'Where did Luke Wood travel for work?', answer_a: 'Germany', answer_b: 'Russia', answer_c: 'China', answer_d: 'England'},

    {question: 'Which vigilante was the most difficult to write?', answer_a: 'Echo 59', answer_b: 'Adam Crespo', answer_c: 'Burning Hand', answer_d: 'Three Eyed Warrior'},

    {question: 'Which vigilante was created first?', answer_a: 'Viper', answer_b: 'Silver Spectre', answer_c: 'Burning Hand', answer_d: 'Jack Kitchin'},

    {question: 'How did Echo 59 defeat the Sydney Slasher?', answer_a: 'Pushed him off a roof', answer_b: 'Shot him', answer_c: 'Called the police for help', answer_d: 'Led him into a trap'},

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

    {question: 'Who takes over the Bondi Boys after their previous leader\'s death?', answer_a: 'Harley Fogul', answer_b: 'Ash Newman', answer_c: 'DJ Snaggletooth', answer_d: 'Brian Hunt'},

    {question: 'What power does the Silver Spectre have?', answer_a: 'Intangibility', answer_b: 'Invisibility', answer_c: 'Emotional Perception', answer_d: 'Precognition'},

    {question: 'Which vigilante is a skilled parkourist?', answer_a: 'DJ Snaggletooth', answer_b: 'Burning Hand', answer_c: 'Red Rhino', answer_d: 'Dexter Barker'},

    {question: 'What is Burning Hand\s mother\s name?', answer_a: 'Catherine', answer_b: 'Kim', answer_c: 'Barbara', answer_d: 'Sonia'},

    {question: 'Where is Burning Hand\s family from?', answer_a: 'Kolkata', answer_b: 'Delhi', answer_c: 'Mumbai', answer_d: 'Kathmandu'},

    {question: 'Who was the first Arthur of the Velvet Knights?', answer_a: 'Felix Laycock', answer_b: 'Alastair Hughes', answer_c: 'Caleb Perry', answer_d: 'Gareth Myman'},

    {question: 'What does Major Patton use?', answer_a: 'BraveHelm Alpha', answer_b: 'BraveHelm Beta', answer_c: 'BraveHelm+', answer_d: 'BraveHelmet'},

    {question: 'What artillery weapon is located at Fort Darling?', answer_a: 'Howitzer', answer_b: 'Mortar', answer_c: 'Cannon', answer_d: 'Trebuchet'},

    {question: 'Which type of drone can be found at Fort Darling?', answer_a: 'Skylark', answer_b: 'Sentinel', answer_c: 'Predator', answer_d: 'Hermes'},

    {question: 'Does Fort Darling have a tank?', answer_a: 'No', answer_b: 'Yes', answer_c: 'I didn\'t read the article', answer_d: 'No, it has a submarine'},

    {question: 'What sport did Major Patton play in his youth?', answer_a: 'AFL', answer_b: 'Soccer', answer_c: 'Golf', answer_d: 'Shooting'},

    {question: 'Where did Major Patton fight?', answer_a: 'Afghanistan', answer_b: 'Vietnam', answer_c: 'Iraq', answer_d: 'Syria'},

    {question: 'Which friend did Major Patton kill?', answer_a: 'Captain Grove', answer_b: 'Private Ryan', answer_c: 'Corporal Stokes', answer_d: 'Private Walters'},

    {question: 'Who first designed the BraveHelm?', answer_a: 'DARPA', answer_b: 'ExoCorp', answer_c: 'The US Army', answer_d: 'NASA'},

    {question: 'Which vehicle does Dexter Barker drive?', answer_a: 'A Bus', answer_b: 'A Motorcycle', answer_c: 'A Taxi', answer_d: 'A Mech'},

    {question: 'Who is the Director', answer_a: 'Daniel Watson', answer_b: 'Dexter Barker', answer_c: 'Nitya Rampal', answer_d: 'Philip Dean'},

    {question: 'What is Mr Ly\s first name?', answer_a: 'Ben', answer_b: 'Dong', answer_c: 'Jude', answer_d: 'Dan'},

    {question: 'Why was Mr Ly dishonoured?', answer_a: 'He was gay', answer_b: 'He killed someone', answer_c: 'He betrayed his family', answer_d: 'He stole from the king'},

    {question: 'What is Will Salkeld?', answer_a: 'A politician', answer_b: 'A stripper', answer_c: 'An author', answer_d: 'An activist'},

    {question: 'Where did Will Salkeld meet Ruby Keeler-Milne?', answer_a: 'Las Vegas', answer_b: 'Sydney', answer_c: 'Kolkata', answer_d: 'Paris'},

    {question: 'When did the Southeast Asian war break out?', answer_a: '2018', answer_b: '2020', answer_c: '2024', answer_d: '2031'},

    {question: 'How much money worth of trade passes through the South China Sea yeary?', answer_a: '$5.3 Trillion', answer_b: '$22.8 Billion', answer_c: '$12.4 Billion', answer_d: '$489.6 Billion'},

    {question: 'What was the catalyst for the Southeast Asian War?', answer_a: 'ISIS shot down a Chinese plane', answer_b: 'China stole sand from Malaysia', answer_c: 'The US bombed Manilla', answer_d: 'Trump tried to assassinate Kim Jon Un'},

    {question: 'Which country is not a combatant in the Southeast Asian War?', answer_a: 'Cambodia', answer_b: 'Philippines', answer_c: 'Indonesia', answer_d: 'Brunei'},

    {question: 'What is the average temperature on Macquarie Island?', answer_a: '6˚C', answer_b: '12˚C', answer_c: '-2˚C', answer_d: '3˚C'},

    {question: 'What political system exists on Macquarie Island?', answer_a: 'Anarchocommunism', answer_b: 'Fascism', answer_c: 'Totalitarianism', answer_d: 'Feudalism'},

    {question: 'What is the name of Macquarie Island\s preacher?', answer_a: 'Father Scott-Mitchell', answer_b: 'Father Hargreaves', answer_c: 'Jesse Custer', answer_d: 'Father Neal'},

    {question: 'What is not a food source for the Macquarie Islanders', answer_a: 'Moths', answer_b: 'Krill', answer_c: 'Lichen', answer_d: 'Whale'},

    {question: 'What does the Cosmologist dress as?', answer_a: 'A Hipster', answer_b: 'A Wizard', answer_c: 'A Chef', answer_d: 'A Doctor'},

    {question: 'Which dimension can the Comsologist manipulate?', answer_a: 'Time', answer_b: 'Space', answer_c: 'Probability', answer_d: 'All of them'},

    {question: 'What was the name of Cole\s lover?', answer_a: 'Raphael', answer_b: 'Susan', answer_c: 'Ruby', answer_d: 'Piérre'},

    {question: 'Who commands the Les Apaches?', answer_a: 'Ruby Keeler-Milne', answer_b: 'Jack Kitchin', answer_c: 'The Cosmologist', answer_d: 'Burning Hand'},

    {question: 'How old was Father Hargreaves when he died?', answer_a: 'Over 200', answer_b: 'Almost 400', answer_c: '98', answer_d: '173'},

    {question: 'What is a central theme of Cole\s story?', answer_a: 'Faith', answer_b: 'Jealousy', answer_c: 'Racism', answer_d: 'Technology'},

    {question: 'Where did Cole meet Father Hargreaves?', answer_a: 'Outside Paris', answer_b: 'Athens', answer_c: 'Melbourne', answer_d: 'Nazi Germany'},

    {question: 'Why did the Cosmologist settle in Sydney?', answer_a: 'He didn\t know anyone there', answer_b: 'There was lots of crime', answer_c: 'It was an interdimensional waypoint', answer_d: 'His father had lived there'},

    {question: 'How many shots does Jack Kitchin\s gun hold?', answer_a: 'Five', answer_b: 'Two', answer_c: 'Ten', answer_d: 'Seven'},

    {question: 'What colour is Jack Kitchin\s glove?', answer_a: 'Red', answer_b: 'Brown', answer_c: 'Blue', answer_d: 'Purple'},

    {question: 'What is the name of Jack Kitchin\s weapon?', answer_a: 'Sedgley OSS .38', answer_b: 'Sedgley OSS', answer_c: 'Sedgely OSS .38', answer_d: 'Sedgely OSS'},

    {question: 'What was Jack Kitchin cursed with?', answer_a: 'Bad Luck', answer_b: 'Erectile Dysfunction', answer_c: 'Hopelessness', answer_d: 'Amnesia'},

    {question: 'What is Jack Kitchin\s superpower?', answer_a: 'Probability Manipulation', answer_b: 'Pressure Alteration', answer_c: 'Fortune Telling', answer_d: 'Intangibility'},

    {question: 'What event did Jack miss?', answer_a: 'His brother\s wedding', answer_b: 'His mother\s funeral', answer_c: 'His own divorce', answer_d: 'His presidential inauguration'},

    {question: 'What American city did Jack Kitchin live in?', answer_a: 'Las Vegas', answer_b: 'New York', answer_c: 'San Francisco', answer_d: 'Colorado'},

    {question: 'What did Jack Kitchin do when he got his powers?', answer_a: 'Went back to gambling', answer_b: 'Confronted the Les Apaches', answer_c: 'Fled to Alaska', answer_d: 'Slept for a week'},

    {question: 'How many women was Jack Kitchin dating at once in Vegas?', answer_a: 'Four', answer_b: 'Six', answer_c: 'Eight', answer_d: 'Not Enough'},

    {question: 'Where did Jack Kitchin meet the Cosmologist?', answer_a: 'A Church', answer_b: 'A Bar', answer_c: 'A Barber', answer_d: 'A Mini-Golf Course'},

    {question: 'How much money did the gambling counsellor give Jack Kitchin?', answer_a: '$100', answer_b: '$48', answer_c: '$20', answer_d: '$12.50'},

    {question: 'Which big-name gambler beat Jack Kitchin?', answer_a: 'Red Pig', answer_b: 'Ruby Keeler-Milne', answer_c: 'Fortuno', answer_d: 'Weaver'},

    {question: 'What happens if Jack Kitchin overuses his power?', answer_a: 'His brain bleeds', answer_b: 'His power reverses', answer_c: 'He creates a paradox', answer_d: 'A demon is summoned to stop him'},

    {question: 'What is Ruby Keeler-Milne\s dress made of?', answer_a: 'Universes', answer_b: 'Silk', answer_c: 'Dark Matter', answer_d: 'Sapphire'},

    {question: 'Which war did Ruby Keeler-Milne fight in?', answer_a: 'World War I', answer_b: 'World War II', answer_c: 'Afghanistan War', answer_d: 'Vietnam War'},

    {question: 'Where was Ruby Keeler-Milne born?', answer_a: 'Germany', answer_b: 'Australia', answer_c: 'France', answer_d: 'Turkmenistan'},

    {question: 'Which dimension can Ruby Keeler-Milne manipulate', answer_a: 'Space', answer_b: 'Time', answer_c: 'Probability', answer_d: 'The Dark Dimension'},

    {question: 'Ruby Keeler Milne\s powers centre around:', answer_a: 'Illusions', answer_b: 'Clairvoyance', answer_c: 'Elemental Magic', answer_d: 'Super Strength'},

    {question: 'In what year was Ruby Keeler-Milne born?', answer_a: '1897', answer_b: '1901', answer_c: '2000', answer_d: '1935'},

    {question: 'Who did Ruby Keeler-Milne befriend in a POW camp?', answer_a: 'Nurse Roth', answer_b: 'Father Scott-Mitchell', answer_c: 'Will Salkeld', answer_d: 'Jack Kitchin'},

    {question: 'Who revealed the identity of the Sydney Slasher?', answer_a: 'Mrs Whenigah', answer_b: 'Sergeant Riley', answer_c: 'Rolf Harris', answer_d: 'Superintendent Wade'},

    {question: 'Why did Superintendent Wade allow the Sydney Slasher to continue killing?', answer_a: 'To lower the value of local properties', answer_b: 'To ruin the reputation of the police department', answer_c: 'He was sadistic', answer_d: 'To create a symbol for the media'},
    
    {question: 'What does Hannah Kroeger work as?', answer_a: 'A firefighter', answer_b: 'A psychologist', answer_c: 'A postwoman', answer_d: 'A masseuse'},
    
    {question: 'In what year did Black February occur?', answer_a: '2027', answer_b: '2018', answer_c: '2034', answer_d: '2023'},
    
    {question: 'Which instrument does Jimena Armstrong play?', answer_a: 'Ukelele', answer_b: 'Kazoo', answer_c: 'Guitar', answer_d: 'Tamborine'},
    
    {question: 'On which topic is Jimena Armstrong not knowledgable?', answer_a: 'Tie Dying', answer_b: 'Fermentation', answer_c: 'Astrology', answer_d: 'Crystal Healing'},
    
    {question: 'What is the name of Jiemna Armstrong/s son?', answer_a: 'Ray', answer_b: 'Simon', answer_c: 'Opal', answer_d: 'Hope'},

    {question: 'Why does Jiemna Armstrong take such good care of her son?', answer_a: 'Her own parents left her', answer_b: 'It/s what a mother should do', answer_c: 'Charcoalville is very dangerous', answer_d: 'He has an intellectual disability'},
    
    {question: 'In which country did Jimena Armstrong become pregnant?', answer_a: 'Iceland', answer_b: 'Argentina', answer_c: 'Canada', answer_d: 'Vietnam'},
    
    {question: 'Where is Charcoalville?', answer_a: 'Belmore Park', answer_b: 'Wentworth Park', answer_c: 'Centennial Park', answer_d: 'Hyde Park'},
    
    {question: 'What did Hannah Kroeger study at university?', answer_a: 'Psychology', answer_b: 'Firefighting', answer_c: 'Law', answer_d: 'Art'},
    
    {question: 'Which of the following firefighting skills is Hannah Kroeger not adept at?', answer_a: 'Tactical Leadership', answer_b: 'Crowd Control', answer_c: 'First Aid', answer_d: 'Emergency Response'},
    
    {question: 'How long was Hannah Kroeger/s firefighter training course?', answer_a: '13 Days', answer_b: '5 Days', answer_c: '3 Weeks', answer_d: '2 Months'},
    
    {question: 'Which town was Hannah Kroeger/s firefighting team forced to defend?', answer_a: 'Lithgow', answer_b: 'Katoomba', answer_c: 'Nowra', answer_d: 'Ilford'},
    
    {question: 'How many casualties had the Black February bushfires caused by February 19?', answer_a: '200', answer_b: '50', answer_c: '150', answer_d: '100'},
    
    {question: 'In what year was Ruby Keeler-Milne born?', answer_a: '1897', answer_b: '1901', answer_c: '2000', answer_d: '1935'},
    
    {question: 'On what day did the Black February bushfires break out?', answer_a: 'January 24th', answer_b: 'February 19th', answer_c: 'February 2nd', answer_d: 'February 7th'},
    
    {question: 'Who was once Hannah Kroeger/s romantic partner?', answer_a: 'Max Davison', answer_b: 'Tongyi Shen', answer_c: 'Siena Mitchell', answer_d: 'Dylan Jenkin'},
    
    {question: 'Why did Hannah Kroeger think she couldn/t be a firefighter?', answer_a: 'She was too short', answer_b: 'She was scared of fire', answer_c: 'She was a woman', answer_d: 'She had poor vision'},
    
    {question: 'Where did Hannah Kroeger find the missing child during the Lithgow fire?', answer_a: 'The supermarket', answer_b: 'The bowling alley', answer_c: 'The swimming pool', answer_d: 'The school'},
    
    {question: 'Why does Charcoalville exist?', answer_a: 'Refugees fleeing the bushfires needed somewhere to live', answer_b: 'Developers set it up as a racially segregated suburb', answer_c: 'People made homeless by Sydney/s urban consolidation live there', answer_d: 'It was built as a charity tax dodge for mafia bosses'},
    
];

//Variables
var CorrectCount = 0;
var Correct = false;
var QuestionsCompleted = 0;
var ChosenQuestion = Questions[0];
var UserAnswer = '';
var IsResults = false;

//Start Game
ChosenQuestion = Questions[Math.floor((Math.random() * Questions.length) + 1)];
FillQuiz(ChosenQuestion);

//On Answer Click
$(".quiz-answer").click(function(){

    if(IsResults){
        return;
    }

    // set game state
    IsResults = true;

    // set user answer
    if($(this).html() == ChosenQuestion.answer_a){
        UserAnswer = ChosenQuestion.answer_a;
        CorrectCount++;
    }

    // set styles
    ResetQuestions();
    if(ChosenQuestion.answer_a == AnswerA.html()){
        AnswerA.addClass('is-success');
        AnswerB.addClass('is-danger');
        AnswerC.addClass('is-danger');
        AnswerD.addClass('is-danger');
    }
    else if(ChosenQuestion.answer_a ==  AnswerB.html()){
        AnswerA.addClass('is-danger');
        AnswerB.addClass('is-success');
        AnswerC.addClass('is-danger');
        AnswerD.addClass('is-danger');
    }
    else if(ChosenQuestion.answer_a ==  AnswerC.html()){
        AnswerA.addClass('is-danger');
        AnswerB.addClass('is-danger');
        AnswerC.addClass('is-success');
        AnswerD.addClass('is-danger');
    }
    else if(ChosenQuestion.answer_a ==  AnswerD.html()){
        AnswerA.addClass('is-danger');
        AnswerB.addClass('is-danger');
        AnswerC.addClass('is-danger');
        AnswerD.addClass('is-success');
    }

    // show next button
    NextButton.show();

    //Add to questions asked
    QuestionsCompleted++;

    //Change Progress Value
    ProgressBar.val(QuestionsCompleted * 10);

    //Check if Quiz Completed
    if(QuestionsCompleted >= 10){
        NextButton.html('Finish');
    }

    //Display Correction
    //CorrectionBox.html(Correct ? 'Correct' : 'Incorrect');
});

//On Start Game Click
$(".quiz-start").click(function(){

    // set game state
    IsResults = false;

    NextButton.html("Next");
    $("#quiz-results").hide();
    $("#quiz-title").fadeOut(200, function(){
        $("#quiz-game").fadeIn(200, function(){});
        CorrectCount = 0;
        QuestionsCompleted = 0;
        ProgressBar.val(0);
    });
});

NextButton.click(function(){

    // set game state
    IsResults = false;

    // create next question
    ChosenQuestion = Questions[Math.floor((Math.random() * Questions.length))];
    FillQuiz(ChosenQuestion);
    ResetQuestions();

    //Check if Quiz Completed
    if(QuestionsCompleted >= 10){
        NextButton.html("Next");
        $("#quiz-game").fadeOut(200, function(){
            $("#quiz-results").fadeIn(200, function(){});
            $("#quiz-results-percentage").html((CorrectCount * 10).toString());
        });
    }

    // next button
    NextButton.hide();
})

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
function Shuffle(array) {
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

// Functions
function GetCorrect(question){
    for(var i = 0; i < Questions.length; i++){
        if(Questions[i] == question){
            return question.answer_a;
        }
    }
}

function IsCorrect(question, answer){
    if(question.answer_a == answer){
        return true;
    }
    return false;
}

// correct/incorrect answers
function ResetQuestions(){
    AnswerA.removeClass('is-danger');
    AnswerA.removeClass('is-success');

    AnswerB.removeClass('is-danger');
    AnswerB.removeClass('is-success');

    AnswerC.removeClass('is-danger');
    AnswerC.removeClass('is-success');

    AnswerD.removeClass('is-danger');
    AnswerD.removeClass('is-success');
}

function GetAnswer(letter){
    switch(letter){
        case 'a':
            return AnswerA;
        case 'b':
            return AnswerB;
        case 'c':
            return AnswerC;
        case 'd':
            return AnswerD;
    }
}
