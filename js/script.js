//On Link Press
$(".link-page").click(function(){
    var ClassList = $(this).attr('class').split(/\s+/);

    //Loop through each class
    for (var x = 0; x < ClassList.length; x++) {
        //Class containing page is found
        if (ClassList[x].substring(0, 10) == "link-page-") {

            //Get Page Text
            var page = ClassList[x].split("link-page-")[1];

            SetPage(page);

            //Break
            break;
        }
    }
});

//Hero Icon Image Change || TEMP: Until Character Card Images Are Made
$(".hero-card").hover(function(){
        $(this).find("img").attr("src", "img/icon/icon-dark.png");
    },function(){
        $(this).find("img").attr("src", "img/icon/icon.png");
    });

//Reset All Pages & Page Links
function ResetPageSelection(){
    $(".drop-down-box").slideUp(); // Close All Drop Downs
    $("[id^=page-]").fadeOut(100, function(){}); //Hide All Pages
    $(".link-page").removeClass("is-active"); //Clear SideBar Styles
}

function SetPage(PageName){
    //Animation Effect
    $("#page-shell").fadeOut(250, function(){
        //Get Component Text
        $.get("../components/" + PageName + ".xml", function(data) {
            $("#page-shell").html(data);
        }, 'text');
    });
    setTimeout(function(){
        $("#page-shell").fadeIn(250, function(){});
    }, 200);

    //Set link to is-active
    $(".link-page").removeClass("is-active");
    $(".link-page-" + PageName).addClass("is-active");

    //Get Component Text


    //Set Cookies
    Cookies.set('page', PageName);
}

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


