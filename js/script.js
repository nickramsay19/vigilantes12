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


function ResetPageSelection(){

    //Hide All Pages
    $("#page-home").fadeOut(100, function(){});
    $("#page-podcasts").fadeOut(100, function(){});
    $("#page-heroes").fadeOut(100, function(){});
    $("#page-viper").fadeOut(100, function(){});
    $("#page-viper-viper").fadeOut(100, function(){});
    $("#page-team").fadeOut(100, function(){});
    $("#page-discover").fadeOut(100, function(){});
    $("#page-timeline").fadeOut(100, function(){});

    //Clear SideBar Styles
    $(".link-page-home").removeClass("is-active");
    $(".link-page-podcasts").removeClass("is-active");
    $(".link-page-heroes").removeClass("is-active");
    $(".link-page-viper").removeClass("is-active");
    $(".link-page-team").removeClass("is-active");
    $(".link-page-discover").removeClass("is-active");
    $(".link-page-timeline").removeClass("is-active");
}
