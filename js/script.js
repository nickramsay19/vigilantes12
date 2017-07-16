//Timeline
var container = document.getElementById('visualization'); // DOM element where the Timeline will be attached
var groups = [
    {id: 1, content: 'Viper Sub-Universe'},
    {id: 2, content: 'Vigilantes Universe'}
]; // Create Groups
var items = new vis.DataSet([
    {id: 1, content: 'Mike Baird passes law restricting environmental protests', start: '2016-03-20', group: 1},
    {id: 2, content: 'Donald trump wins the american presidential election', start: '2016-11-09', group: 1},
    {id: 3, content: 'Viper trains with the Longying', start: '2017-03-29', end: '2022-10-26', group: 2},
    {id: 4, content: 'Nick commits to his legal profession', start: '2022-10-26', end: '2023-12-03', group: 2},
    {id: 5, content: 'item 5', start: '2022-10-26', end: '2023-12-03'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
]); // Create a DataSet (allows two way data-binding)
var options = {}; // Configuration for the Timeline
var timeline = new vis.Timeline(container, items, groups, options); // Create a Timeline

//Cookies
if(Cookies.get().hasOwnProperty("page")){
    SetPage(Cookies.get('page'));
    document.getElementById('content').scrollIntoView();
}

//JQuery
$(document).ready(function(){
    //Hero Icon Image Change
    $(".hero-icon img").hover(
        function(){
        $(this).attr("src", "img/icon/icon-dark.png");
    },
        function(){
        $(this).attr("src", "img/icon/icon.png");
    }
    );

    //Page Links
    $(".link-page-home").click(function(){
        SetPage("home");
    });
    $(".link-page-heroes").click(function(){
        SetPage("heroes");
    });
    $(".link-page-team").click(function(){
        SetPage("team");
    });
    $(".link-page-discover").click(function(){
        SetPage("discover");
    });
    $(".link-page-timeline").click(function(){
        SetPage("timeline");
    });
    $(".link-page-podcasts").click(function(){
        SetPage("podcasts");
    });
    $(".link-page-viper").click(function(){
        SetPage("viper");
    });
    $(".link-page-viper-viper").click(function(){
        SetPage("viper-viper");
    });
    $(".link-page-viper-jp").click(function(){
        SetPage("viper-jp");
    });
    $(".link-page-spectre").click(function(){
        SetPage("spectre");
    });
    $(".link-page-mockingbird").click(function(){
        SetPage("mockingbird");
    });
    $(".link-page-burning").click(function(){
        SetPage("burning");
    });
    $(".link-page-jack").click(function(){
        SetPage("jack");
    });
    $(".link-page-dilhan").click(function(){
        SetPage("dilhan");
    });
    $(".link-page-hannah").click(function(){
        SetPage("hannah");
    });
    $(".link-page-tom").click(function(){
        SetPage("tom");
    });
    $(".link-page-miranda").click(function(){
        SetPage("miranda");
    });
    $(".link-page-hunter").click(function(){
        SetPage("hunter");
    });

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



