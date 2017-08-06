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

//Reset All Pages & Page Links
function ResetPageSelection(){
    //Clear SideBar Styles
    $(".link-page").removeClass("is-active");
}

function SetPage(PageName){
    //Animation Effect
    $("#page-shell").fadeOut(250, function(){
        //Get Component Text
        $.get("components/" + PageName + ".html", function(data) {
            $("#page-shell").html(data);
        }, 'text');

    //Reset Pages
    ResetPageSelection();
    PageShell.fadeOut(200, function(){

        //Change Page
        PageShell.html($("#page-" + PageName).html());
        PageShell.fadeIn(200, function(){})
    });

    //Set Link to Active
    $(".link-page-" + PageName).addClass("is-active");

    //Set Cookies
    Cookies.set('page', PageName);
});
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
    $(this).find("img").attr("src", "img/icon/icon-dark.png");
},function(){
    $(this).find("img").attr("src", "img/icon/icon.png");
});

//Password
$(".access-enter").click(function(){
    var Value = $(".access-value").val();
    if(Value == "nickiscool"){
        $(".access-modal").removeClass("is-active");
        Cookies.set('access', 'true');
    }
})


