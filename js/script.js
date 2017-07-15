//Timeline
// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var groups = [
    {id: 1, content: 'Viper Sub-Universe'},
    {id: 2, content: 'Vigilantes Universe'}
];
var items = new vis.DataSet([
    {id: 1, content: 'Mike Baird passes law restricting environmental protests', start: '2016-03-20', group: 1},
    {id: 2, content: 'Donald trump wins the american presidential election', start: '2016-11-09', group: 1},
    {id: 3, content: 'Viper trains with the Longying', start: '2017-03-29', end: '2022-10-26', group: 2},
    {id: 4, content: 'Nick commits to his legal profession', start: '2022-10-26', end: '2023-12-03', group: 2},
    {id: 5, content: 'item 5', start: '2022-10-26', end: '2023-12-03'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

//Page Links
$(document).ready(function(){
    $(".link-page-home").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-home").addClass("is-active");
            $("#page-home").fadeIn(500, function(){});
        },
        200);

    });
    $(".link-page-heroes").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-heroes").addClass("is-active");
            $("#page-heroes").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-podcasts").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-podcasts").addClass("is-active");
            $("#page-podcasts").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-viper").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-viper").addClass("is-active");
            $("#page-viper").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-viper-viper").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-viper-viper").addClass("is-active");
            $("#page-viper-viper").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-viper-jp").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-viper-jp").addClass("is-active");
            $("#page-viper-jp").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-spectre").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-spectre").addClass("is-active");
            $("#page-spectre").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-mockingbird").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-mockingbird").addClass("is-active");
            $("#page-mockingbird").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-burning").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-burning").addClass("is-active");
            $("#page-burning").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-jack").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-jack").addClass("is-active");
            $("#page-jack").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-dilhan").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-dilhan").addClass("is-active");
            $("#page-dilhan").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-hannah").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-hannah").addClass("is-active");
            $("#page-hannah").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-tom").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-tom").addClass("is-active");
            $("#page-tom").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-miranda").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-miranda").addClass("is-active");
            $("#page-miranda").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-hunter").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-hunter").addClass("is-active");
            $("#page-hunter").fadeIn(500, function(){});
        },
                   200);
    });
    $(".link-page-team").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-team").addClass("is-active");
            $("#page-team").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-discover").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-discover").addClass("is-active");
            $("#page-discover").fadeIn(500, function(){});
        },
        200);
    });
    $(".link-page-timeline").click(function(){
        ResetPageSelection();
        setTimeout(function(){
            $(".link-page-timeline").addClass("is-active");
            $("#page-timeline").fadeIn(500, function(){});
        },
        200);
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

//title: 'This opened a path that led to unprecedented environmental destruction and severe coruption. As similar laws were implemented and tightened corporations were able to increase their influence exponentially.', content: 'Mike Baird passes law restricting environmental protests'

//Opened the door for global political unrest. Thanks to Australia's close relationship with the USA and growing instability, Trump was able to pressure the Australian government to his ends. Most significantly this was the start of discrimination of Australia's Asian population.
