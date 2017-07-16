//Set Page From Session Cookies
if(Cookies.get().hasOwnProperty("page")){
    SetPage(Cookies.get('page'));
    document.getElementById('content').scrollIntoView();
}

//JQuery
$(document).ready(function(){
    //Hero Icon Image Change || TEMP: Until Character Card Images Are Made
    $(".hero-icon img").hover(
        function(){
        $(this).attr("src", "img/icon/icon-dark.png");
    },
        function(){
        $(this).attr("src", "img/icon/icon.png");
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

    //Hide All Pages
    $("#page-home").fadeOut(100, function(){});
    $("#page-podcasts").fadeOut(100, function(){});
    $("#page-team").fadeOut(100, function(){});
    $("#page-discover").fadeOut(100, function(){});
    $("#page-timeline").fadeOut(100, function(){});
    $("#page-heroes").fadeOut(100, function(){});
    $("#page-viper").fadeOut(100, function(){});
    $("#page-viper-viper").fadeOut(100, function(){});
    $("#page-viper-jp").fadeOut(100, function(){});
    $("#page-spectre").fadeOut(100, function(){});
    $("#page-mockingbird").fadeOut(100, function(){});
    $("#page-burning").fadeOut(100, function(){});
    $("#page-jack").fadeOut(100, function(){});
    $("#page-dilhan").fadeOut(100, function(){});
    $("#page-hannah").fadeOut(100, function(){});
    $("#page-tom").fadeOut(100, function(){});
    $("#page-miranda").fadeOut(100, function(){});
    $("#page-hunter").fadeOut(100, function(){});


    //Clear SideBar Styles
    $(".link-page-home").removeClass("is-active");
    $(".link-page-team").removeClass("is-active");
    $(".link-page-discover").removeClass("is-active");
    $(".link-page-timeline").removeClass("is-active");
    $(".link-page-podcasts").removeClass("is-active");
    $(".link-page-heroes").removeClass("is-active");
    $(".link-page-viper").removeClass("is-active");
    $(".link-page-viper-viper").removeClass("is-active");
    $(".link-page-viper-jp").removeClass("is-active");
    $(".link-page-spectre").removeClass("is-active");
    $(".link-page-mockingbird").removeClass("is-active");
    $(".link-page-burning").removeClass("is-active");
    $(".link-page-jack").removeClass("is-active");
    $(".link-page-dilhan").removeClass("is-active");
    $(".link-page-hannah").removeClass("is-active");
    $(".link-page-tom").removeClass("is-active");
    $(".link-page-miranda").removeClass("is-active");
    $(".link-page-hunter").removeClass("is-active");

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
    {id: 1, content: 'Environmental Protests Resricted', title:'Mike Baird passes law restricting environmental protests', start: '2016-03-20', group: 1},
    {id: 2, content: 'Donald Trump Elected', title:'Donald trump wins the american presidential election.', start: '2016-11-09', group: 1},
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
        var ItemContent = items.get(parseInt(properties.items)).title;
        $("#timeline-details").text(ItemContent);
    }
    else{
        SelectedItem = 0;
    }
});
timeline.on('itemover', function(properties){
    var ItemContent = items.get(properties.item).title;
    $("#timeline-details").text(ItemContent);
});
timeline.on('itemout', function(properties){
    if(SelectedItem > 0){
        var ItemContent = items.get(SelectedItem).title;
        $("#timeline-details").text(ItemContent);
    }
    else{
        $("#timeline-details").text("Hover over an event to see extra details here!");
    }




});
