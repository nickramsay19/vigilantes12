$(document).ready(function(){
    $("#link-page-home").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-home").fadeIn(500, function(){});
        },
        200);

    });
    $("#link-page-heroes").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-heroes").fadeIn(500, function(){});
        },
        200);
    });
    $("#link-page-podcasts").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-podcasts").fadeIn(500, function(){});
        },
        200);
    });
    $("#link-page-viper").click(function(){
        HideAllPages();
        setTimeout(function(){
            $("#page-viper").fadeIn(500, function(){});
        },
        200);
    });
});


function HideAllPages(){
    $("#page-home").fadeOut(100, function(){});
    $("#page-podcasts").fadeOut(100, function(){});
    $("#page-heroes").fadeOut(100, function(){});
    $("#page-viper").fadeOut(100, function(){});
}
