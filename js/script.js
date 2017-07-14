$(document).ready(function(){
    $("#side-nav-home").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-home").fadeIn(500, function(){});
        },
        200);

    });
    $("#side-nav-heroes").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-heroes").fadeIn(500, function(){});
        },
        200);
    });
    $("#side-nav-podcasts").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-podcasts").fadeIn(500, function(){});
        },
        200);
    });
});


function HideAllPages(){
    $("#page-home").fadeOut(100, function(){});
    $("#page-podcasts").fadeOut(100, function(){});
    $("#page-heroes").fadeOut(100, function(){});
}
