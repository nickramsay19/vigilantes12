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
});

//Hero Icon Image Change || TEMP: Until Character Card Images Are Made
$(".hero-card").hover(
    function(){
        $(this).find("img").attr("src", "img/icon/icon-dark.png");
    },
    function(){
        $(this).find("img").attr("src", "img/icon/icon.png");
    }
);

//Set Page From Session Cookies
if(Cookies.get().hasOwnProperty("page")){
    SetPage(Cookies.get("page"));
    document.getElementById('content').scrollIntoView();
}
else{
    SetPage("home");
    document.getElementById('content').scrollIntoView();
}

//Reset All Pages & Page Links
function ResetPageSelection(){
    $(".drop-down-box").slideUp(); // Close All Drop Downs
    $("[id^=page-]").fadeOut(100, function(){}); //Hide All Pages
    $(".link-page").removeClass("is-active"); //Clear SideBar Styles
}

//Set Page
function SetPage(PageName){

    ResetPageSelection();
    $(".link-page-" + PageName).addClass("is-active");
    setTimeout(function(){
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

    {id: 1, content: 'Environmental Protests Restricted', title:'Mike Baird passes law restricting environmental protests. This opened a path that led to unprecedented environmental destruction and severe coruption. As similar laws were implemented and tightened, corporations were able to increase their influence exponentially.', start: '2016-03-20', type: 'point', group: 1},
    {id: 2, content: 'Trump Elected', title:'Donald Trump wins the American presidential election. Opened the door for global political unrest. Thanks to Australia\'s close relationship with the USA and growing instability, Trump was able to pressure the Australian government to his ends. Most significantly this was the start of discrimination of Australia\'s Asian population.', start: '2016-11-09', type: 'point', group: 1},
    {id: 3, content: 'Viper Longying', title:'Viper trains with the Longying.', start: '2017-03-29', end: '2022-10-26', group: 2},
    {id: 4, content: 'Law Proffesion', title: 'Nick commits to his law profession.', start: '2022-10-26', end: '2023-12-03', group: 2},
    {id: 5, content: 'Longying Raid', title: 'Anti-terrorism forces from Fort Darling stormed the Longying base(near Darling Harbour) and they suffered profound losses.', start: '2023-12-02', type: 'point', group: 2},
    {id: 6, content: 'Lucky Moon Opens', title: 'Tongyi Shen opens the Lucky Moon Yum Cha on Elizabeth Street.', start: '2021-06-25', type: 'point', group: 2},
    {id: 7, content: 'Yang Jian In China', title: 'The Three Eyed Warrior travels to China to train and lay the ground work for Longying influence there.', start: '2020-05-07', end: '2023-12-05', group: 2},
    {id: 'A', content: 'Stage 1', start: '2023-12-2', end: '2028-01-22', type: 'background', group: 2},
    {id: 'B', content: 'Stage 2', start: '2014-01-25', end: '2014-01-30', type: 'background', group: 2}
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
} // Clean Date\

//Drop Downs
$(".drop-down-box").slideUp(); // Close All Drop Downs
$(".drop-down-button").click(function(){

    //ResetDropDowns();
    var ID = "#" + $(this).attr("id");

    if($(".drop-down-box" + ID).is(":visible")){
        $(".drop-down-box" + ID).slideUp();

        //Change to Chevron Down
        $(".drop-down-button" + ID).removeClass("fa fa-arrow-circle-up");
        $(".drop-down-button" + ID).addClass("fa fa-arrow-circle-down");
    }
    else{
        $(".drop-down-box" + ID).slideDown();

        //Change to Chevron Up
        $(".drop-down-button" + ID).removeClass("fa fa-arrow-circle-down");
        $(".drop-down-button" + ID).addClass("fa fa-arrow-circle-up");
    }
});

//Search
$(".search-list-item").hide();
$(".search-label").hide();

var SearchOptions = [
    {tags: '! vigilantes Home', element: '<li class="search-list-item"><a class="link-page link-page-home is-active"><i class="fa fa-home"></i>&nbsp;Home</a></li>', matches: 0},
    {tags: '! sound Podcasts', element: '<li class="search-list-item"><a class="link-page link-page-podcasts"><i class="fa fa-headphones"></i>&nbsp;Podcasts</a></li>', matches: 0},
    {tags: '! extra info links Discover More', element: '<li class="search-list-item"><a class="link-page link-page-discover"><i class="fa fa-info-circle"></i>&nbsp;Discover More</a></li>', matches: 0},
    {tags: '! developers writers website designers artists The Team', element: '<li class="search-list-item"><a class="link-page link-page-team"><i class="fa fa-pencil-square"></i>&nbsp;The Team</a></li>', matches: 0},
    {tags: '! story World History', element: '<li class="search-list-item"><a class="link-page link-page-history" alt=""><i class="fa fa-university"></i>&nbsp;World History</a></li>', matches: 0},
    {tags: '! heroes characters universes sub', element: '<li class="search-list-item"><a class="link-page link-page-heroes"><i class="fa fa-address-book-o"></i>&nbsp;Sub-Universes</a></li>', matches: 0},
    {tags: '! events story Timeline', element: '<li class="search-list-item"><a class="link-page link-page-timeline"><i class="fa fa-clock-o"></i>&nbsp;Timeline</a></li>', matches: 0},
    {tags: '! Storylines', element: '<li class="search-list-item"><a class="link-page link-page-story"><i class="fa fa-book"></i>&nbsp;Storylines</a></li>', matches: 0},
    {tags: '! sub universe sub viper China Chinese asian nick nicholas ramsay ninja snake rope dart long fist', element: '<li class="search-list-item"><a class="link-page link-page-viper"><i class="fa fa-address-book-o"></i>&nbsp;Viper</a></li>', matches: 0},
    {tags: '! character person viper nick nicholas ramsay ninja snake rope dart long fist Changquan China Chinese asian', element: '<li class="search-list-item"><a class="link-page link-page-viper-viper"><i class="fa fa-user"></i>&nbsp;Viper</a></li>', matches: 0},
    {tags: '! character person viper yang jian jonathan pan jp Monk spade monk\'s spade hook sword hook sword eye China Chinese asian', element: '<li class="search-list-item"><a class="link-page link-page-viper-jp"><i class="fa fa-user"></i>&nbsp;Three Eyed Warrior</a></li>', matches: 0},
    {tags: '! character person viper Tongyi Shen Yum cha chef dumpling restaurant lucky moon China Chinese asian', element: '<li class="search-list-item"><a class="link-page link-page-viper-tongyi"><i class="fa fa-user"></i>&nbsp;Tongyi Shen</a></li>', matches: 0},
    {tags: '! character person viper Major Lewis Patton China Chinese asian Soldier military fort darling bravehelm alpha mind control', element: '<li class="search-list-item"><a class="link-page link-page-viper-patton"><i class="fa fa-user"></i>&nbsp;Major Patton</a></li>', matches: 0},
    {tags: '! character person viper Longying China Chinese asian Group syndicate gang', element: '<li class="search-list-item"><a class="link-page link-page-viper-long"><i class="fa fa-users"></i>&nbsp;Longying</a></li>', matches: 0},
    {tags: '! sub universe character person silver spectre ', element: '<li class="search-list-item"><a class="link-page link-page-spectre"><i class="fa fa-address-book-o"></i>&nbsp;Silver Spectre</a></li>', matches: 0},
    {tags: '! sub universe character person mockingbird', element: '<li class="search-list-item"><a class="link-page link-page-mockingbird"><i class="fa fa-address-book-o"></i>&nbsp;Mockingbird</a></li>', matches: 0},
    {tags: '! sub universe character person burning hand', element: '<li class="search-list-item"><a class="link-page link-page-burning"><i class="fa fa-address-book-o"></i>&nbsp;Burning Hand</a></li>', matches: 0},
    {tags: '! sub universe character person jack kitchin', element: '<li class="search-list-item"><a class="link-page link-page-jack"><i class="fa fa-address-book-o"></i>&nbsp;Jack Kitchin</a></li>', matches: 0}
    ];
var SearchOptionsDisplay;

function Search(){
    SearchOptionsDisplay = [];
    var SearchTerm = document.getElementById("search-input").value.toLowerCase();
    if(SearchTerm == ""){
        $(".search-label").slideUp();
        $(".search-list").slideUp();
    }
    else{
        $(".search-label").slideDown();
        $(".search-list").slideDown();
    }

    var li = $(".search-list-item");
    var attr = "", html = "";

    //NEW RANKING SYSTEM

    var LargestMatch = 0;
    for(var x = 0; x < SearchOptions.length; x++){

        html = SearchOptions[x].element;
        //SearchOptions[x].matches = html.search(SearchTerm);
        SearchOptions[x].matches = SearchOptions[x].tags.toLowerCase().search(SearchTerm);

        if(SearchOptions[x].matches > LargestMatch){
            LargestMatch = SearchOptions[x].matches;
        }
    }

    var SearchAccuracy = 2;
    for(var y = LargestMatch; y > 0; y--){
        for(var x = 0; x < SearchOptions.length; x++){
            if(SearchOptions[x].matches == y){
                SearchOptionsDisplay.push(SearchOptions[x].element);
            }
        }
    }

    //$(".search-list").html(SearchOptionsDisplay.join());
    //Write to Page
    $(".search-list").html(SearchOptionsDisplay.join(""));
    for(var x = 0; x < SearchOptionsDisplay.length; x++){
        //html = SearchOp
        //$(".search-list").html(SearchOptionsDisplay[x]);
    }
    //$(".search-list").html(html + SearchOptionsDisplay[x]);

    //$(".search-list-item").hide();

    /*OLD
    for(x = 0; x < li.length; x++){
        html = $(".search-list-item:eq("+ x.toString() +")").html();

        if(html.search(SearchTerm) > 0){
            $(".search-list-item:eq("+ x.toString() +")").slideDown();
        }
        else{
            $(".search-list-item:eq("+ x.toString() +")").slideUp();
        }
    }*/
}



