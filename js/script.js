//Global Variables
var PageShell = $("#page-shell");
var Components = $("#components");

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

function SetPage(PageName){

    //Reset Pages
    $(".link-page").removeClass("is-active");
    PageShell.fadeOut(200, function(){

        //Change Page
        PageShell.html($("#page-" + PageName).html());
        PageShell.fadeIn(200, function(){})
    });

    //Set Link to Active
    $(".link-page-" + PageName).addClass("is-active");

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

//Hero Icon Image Change || TEMP: Until Character Card Images Are Made
$(".hero-card").hover(function(){
    var IMG = $(this).find("img");
    IMG.attr("src", "img/logo/" + IMG.attr("id") + "-light.png");
},function(){
    var IMG = $(this).find("img");
    IMG.attr("src", "img/logo/" + IMG.attr("id") + ".png");
});

//Password
$(".access-enter").click(function(){
    var Value = $(".access-value").val();
    if(Value == "nickiscool"){
        $(".access-modal").removeClass("is-active");
        Cookies.set('access', 'true');
    }
})

