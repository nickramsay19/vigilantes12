//Dependencies
var $ = require('jquery');
var vis = require('vis');
require('./script.js');

//Timeline
var container = document.getElementById('timeline'); // DOM element where the Timeline will be attached
var groups = [
    {id: 1, content: 'Global'},
    {id: 2, content: 'Viper'},
    {id: 3, content: 'Silver Spectre'},
    {id: 4, content: 'Mockingbird'},
    {id: 5, content: 'Burning Hand'},

]; // Create Groups
var items = new vis.DataSet([

    {id: 1, content: 'Environmental Protests Restricted', title:'Mike Baird passes law restricting environmental protests. This opened a path that led to unprecedented environmental destruction and severe coruption. As similar laws were implemented and tightened, corporations were able to increase their influence exponentially.', start: '2016-03-20', type: 'point', group: 1},
    {id: 2, content: 'Trump Elected', title:'Donald Trump wins the American presidential election. Opened the door for global political unrest. Thanks to Australia\'s close relationship with the USA and growing instability, Trump was able to pressure the Australian government to his ends. Most significantly this was the start of discrimination of Australia\'s Asian population.', start: '2016-11-09', type: 'point', group: 1},
    {id: 3, content: 'Viper Trains', title:'Viper trains with the Longying.', start: '2017-03-29', end: '2022-10-26', group: 2, className: 'viper'},
    {id: 4, content: 'Law Profession', title: 'Nick commits to his law profession.', start: '2022-10-26', end: '2023-12-03', group: 2, className: 'viper'},
    {id: 5, content: 'Longying Raid', title: 'Anti-terrorism forces from Fort Darling stormed the Longying base(near Darling Harbour) and they suffered profound losses.', start: '2023-12-02', type: 'point', group: 2, className: 'viper'},
    {id: 6, content: 'Lucky Moon Opens', title: 'Tongyi Shen opens the Lucky Moon Yum Cha on Elizabeth Street.', start: '2021-06-25', type: 'point', group: 2, className: 'viper'},
    {id: 7, content: 'Yang Jian In China', title: 'The Three Eyed Warrior travels to China to train and lay the ground work for Longying influence there.', start: '2020-05-07', end: '2023-12-05', group: 2, className: 'viper'},
    {id: 8, content: 'Zheng Found Guilty', title: 'Nick loses the defence of Chinaman Roy Zheng, who was allegedly abused by a police officer.', start: '2024-01-10', type: 'point', group: 2, className: 'viper'},
    {id: 9, content: 'Viper Reveal', title: 'In costume for the first time, Viper threatens Major Patton at the gates of Fort Darling before escaping thanks to the Three Eyed Warrior cutting power to Chinatown.', start: '2024-01-27', type: 'point', group: 2, className: 'viper'},
    {id: 10, content: 'Dilhan Found Innocent', title: 'Nick wins the defence of Dilhan Ali, using a legal loophole to prove him innocent of conspiracy to commit terrorism.', start: '2024-02-01', type: 'point', group: 2, className: 'viper'},
    {id: 11, content: 'Battle of Fort Darling', title: 'Asian forces led by Viper and the Longying storm Fort Darling, overwhelming Major Patton\'s forces and destroying the fort and its defences.', start: '2024-02-03', type: 'point', group: 2, className: 'viper'},
    {id: 12, content: 'Southeast Asian War', title: 'Following tension over territory disputes in the South China Sea, a multifaceted and devastating war has erupted, largely a proxy war between China and the USA but with dire ramifications for the wntire region.', start: '2018-05-19', end: '2030-02-07', group: 1},
    {id: 'A', content: 'Stage 1', start: '2023-12-2', end: '2024-02-03', type: 'background', group: 2, className: 'viper'},
    {id: 'B', content: 'Stage 2', start: '2014-01-25', end: '2014-01-30', type: 'background', group: 2, className: 'viper'}
]); // Create a DataSet (allows two way data-binding)
var options = {
    width: '100%',
    margin: {
        item: 20
    },
    horizontalScroll: true,
    showTooltips: false
}; // Configuration for the Timeline
var timeline = new vis.Timeline(container, items, groups, options); // Create a Timeline

//Timeline Events
var SelectedItem = 0;
timeline.on('select', function(properties){
    if(parseInt(properties.items) > 0){
        SelectedItem = parseInt(properties.items);
        PrintInfo(parseInt(properties.items));

        //var ItemContent = items.get(parseInt(properties.items)).title;
        //$("#timeline-details").text(ItemContent);
    }
    else{
        SelectedItem = 0;
        $("#timeline-details").html("<h3 class=\"title\">Hover over or select an event to see extra details about it!</h3>");
    }
});
timeline.on('itemover', function(properties){
    PrintInfo(properties.item);
    //var ItemContent = items.get(properties.item).title;
    //$("#timeline-details").text(ItemContent);
});
timeline.on('itemout', function(properties){
    if(SelectedItem > 0){
        PrintInfo(SelectedItem);
        //var ItemContent = items.get(SelectedItem).title;
        //$("#timeline-details").text(ItemContent);
    }
    else{
        $("#timeline-details").html("<h3 class=\"title\">Hover over or select an event to see extra details about it!</h3>");
    }
});

function PrintInfo(item){

    var title = items.get(item).title;
    var content = items.get(item).content;
    var start = GetCleanDate(items.get(item).start);
    var end = items.get(item).end;

    var text;

    if(!end){
        text = "<h3 class=\"title\">" + content + "</h3><h4 class=\"subtitle\">" + start + "</h4>" + title;
    }
    else{
        var end = GetCleanDate(end);
        text = "<h3 class=\"title\">" + content + "</h3><h4 class=\"subtitle\">" + start + " - " + end + "</h4>" + title;
    }

    $("#timeline-details").html(text);
} // Produce Timeline Details Styling

function GetCleanDate(string){

    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];

    var date = new Date(string);
    var returnString = date.getDate().toString() + " " + monthNames[date.getMonth()] + " " + date.getFullYear().toString();
    return returnString;
} // Clean Date
