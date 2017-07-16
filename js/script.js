//Parallax
var rellax = new Rellax('.rellax');
console.log(rellax);

//Set Page From Session Cookies
if(Cookies.get().hasOwnProperty("page")){
    SetPage(Cookies.get("page"));
    document.getElementById('content').scrollIntoView();
}
else{
    SetPage("home");
    document.getElementById('content').scrollIntoView();
}

//JQuery
$(document).ready(function(){

    //Hero Icon Image Change || TEMP: Until Character Card Images Are Made
    $(".hero-card").hover(
        function(){
            $(this).find("img").attr("src", "img/icon/icon-dark.png");
        },
        function(){
            $(this).find("img").attr("src", "img/icon/icon.png");
        }
    );

    //On Link Press
    $(".link-page").click(function(){
        var ClassList = $(this).attr('class').split(/\s+/);
        console.log(ClassList);

        //Loop through each class
        for (var x = 0; x < ClassList.length; x++) {
            //Class containing page is found
            if (ClassList[x].substring(0, 10) === "link-page-") {

                //Set page
                SetPage(ClassList[x].split("link-page-")[1]);
                break;
            }
        }
    })
});


//Reset All Pages & Page Links
function ResetPageSelection(){
    $("[id^=page-]").fadeOut(100, function(){}); //Hide All Pages
    $(".link-page").removeClass("is-active"); //Clear SideBar Styles
}

//Set Page
function SetPage(PageName){

    ResetPageSelection();
    setTimeout(function(){
        $(".link-page-" + PageName).addClass("is-active");
        $("#page-" + PageName).fadeIn(500, function(){});
        Cookies.set('page', PageName);
    }, 200);

    //Redundant
    /*switch (PageName){
        case "home":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "podcasts":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "team":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "discover":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "timeline":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "heroes":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "viper":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "viper-viper":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "viper-jp":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "spectre":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "mockingbird":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "burning":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "jack":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "dilhan":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "hannah":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "tom":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "miranda":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;
        case "hunter":
            ResetPageSelection();
            setTimeout(function(){
                $(".link-page-" + PageName).addClass("is-active");
                $("#page-" + PageName).fadeIn(500, function(){});
                Cookies.set('page', PageName);
            }, 200);
            break;

    } */
}

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
    {id: 1, content: 'Environmental Protests Resricted', title:'Mike Baird passes law restricting environmental protests. This opened a path that led to unprecedented environmental destruction and severe coruption. As similar laws were implemented and tightened corporations were able to increase their influence exponentially.', start: '2016-03-20', group: 1},
    {id: 2, content: 'Donald Trump Elected', title:'Donald trump wins the american presidential election. Opened the door for global political unrest. Thanks to Australia\'s close relationship with the USA and growing instability, Trump was able to pressure the Australian government to his ends. Most significantly this was the start of discrimination of Australia\'s Asian population.', start: '2016-11-09', group: 1},
    {id: 3, content: 'Viper Longying', title:'Viper trains with the Longying.', start: '2017-03-29', end: '2022-10-26', group: 2},
    {id: 4, content: 'Law Proffesion', title: 'Nick commits to his law profession.', start: '2022-10-26', end: '2023-12-03', group: 2},
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
}

function GetCleanDate(string){

    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];

    var date = new Date(string);
    var returnString = date.getDate().toString() + " " + monthNames[date.getMonth()] + " " + date.getFullYear().toString();
    return returnString;
}

