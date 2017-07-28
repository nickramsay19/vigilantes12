//Global Variables
var SearchOptions = [
    {name: 'Home', tags: ' ! vigilantes Home', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-home"><i class="fa fa-home"></i>&nbsp;Home</a></li>', matches: 0},

    {name: 'Podcasts', tags: ' ! sound Podcasts', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-podcasts"><i class="fa fa-headphones"></i>&nbsp;Podcasts</a></li>',
    matches: 0},

    {name: 'Discover More', tags: ' ! extra info links Discover More', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-discover"><i class="fa fa-info-circle"></i>&nbsp;Discover More</a></li>', matches: 0},

    {name: 'The Team', tags: ' ! developers writers website designers artists The Team', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-team"><i class="fa fa-pencil-square"></i>&nbsp;The Team</a></li>', matches: 0},

    {name: 'World History', tags: ' ! story World History', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-history" alt=""><i class="fa fa-university"></i>&nbsp;World History</a></li>', matches: 0},

    {name: 'Sub Universes', tags: ' ! heroes characters universes sub', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-heroes"><i class="fa fa-address-book-o"></i>&nbsp;Sub-Universes</a></li>', matches: 0},

    {name: 'Timeline', tags: ' ! events story Timeline', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-timeline"><i class="fa fa-clock-o"></i>&nbsp;Timeline</a></li>', matches: 0},

    {name: 'Storylines', tags: ' ! Storylines', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-story"><i class="fa fa-book"></i>&nbsp;Storylines</a></li>', matches: 0},

    {name: 'Viper', tags: ' ! sub universe viper', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper"><i class="fa fa-address-book-o"></i>&nbsp;Viper</a></li>', matches: 0},

    {name: 'Viper Viper', tags: ' ! character person viper nick nicholas ramsay ninja snake rope dart long fist Changquan China Chinese asian', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-viper"><i class="fa fa-user"></i>&nbsp;Viper</a></li>', matches: 0},

    {name: 'JP', tags: ' ! character person viper yang jian jonathan pan jp Monk spade monk\'s spade hook sword eye China Chinese asian three eyed warrior', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-jp"><i class="fa fa-user"></i>&nbsp;Three Eyed Warrior</a></li>', matches: 0},

    {name: 'Tongyi', tags: ' ! character person viper Tongyi Shen Yum cha chef dumpling restaurant lucky moon China Chinese asian', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-tongyi"><i class="fa fa-user"></i>&nbsp;Tongyi Shen</a></li>', matches: 0},

    {name: 'Patton', tags: ' ! character person viper Major Lewis Patton Soldier military fort darling brave helmet alpha mind control', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-patton"><i class="fa fa-user"></i>&nbsp;Major Patton</a></li>', matches: 0},

    {name: 'Longying', tags: ' ! viper Longying China Chinese asian group syndicate gang', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-long"><i class="fa fa-users"></i>&nbsp;Longying</a></li>', matches: 0},

    {name: 'Spectre', tags: ' ! sub universe silver spectre vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre"><i class="fa fa-address-book-o"></i>&nbsp;Silver Spectre</a></li>', matches: 0},

    {name: 'Spectre Spectre', tags: ' ! character person silver spectre vigilante hugo johannsen shock gloves intangible physics ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-rhino"><i class="fa fa-user"></i>&nbsp;Silver Spectre</a></li>', matches: 0},

    {name: 'Red Rhino', tags: ' ! character person silver spectre vigilante dylan jenkin wrestler red rhino', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-spectre"><i class="fa fa-user"></i>&nbsp;Red Rhino</a></li>', matches: 0},

    {name: 'ExoCorp', tags: ' ! group person exocorp corp silver spectre', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-corp"><i class="fa fa-user"></i>&nbsp;ExoCorp</a></li>', matches: 0},

    {name: 'Phillip Dean', tags: ' ! character person silver spectre vigilante phillip dean rich man', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-dean"><i class="fa fa-user"></i>&nbsp;Phillip Dean</a></li>', matches: 0},

    {name: 'Mockingbird', tags: ' ! sub universe mockingbird vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-mockingbird"><i class="fa fa-address-book-o"></i>&nbsp;Mockingbird</a></li>', matches: 0},

    {name: 'Burning Hand', tags: ' ! sub universe burning hand vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-burning"><i class="fa fa-address-book-o"></i>&nbsp;Burning Hand</a></li>', matches: 0},

    {name: 'Jack Kitchin', tags: ' ! sub universe jack kitchin vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-jack"><i class="fa fa-address-book-o"></i>&nbsp;Jack Kitchin</a></li>', matches: 0},

    {name: 'Nick', tags: ' ! ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-nick"><i class="fa fa-smile-o"></i>&nbsp;Nick\'s Secret Page</a></li>', matches: 0}


];
var SearchOptionsDisplay;

//Search for no value - Hides search elements
Search();

//On Search
function Search(){

    //Reset SearchOptionsDisplay
    SearchOptionsDisplay = [];

    //Get SearchTerm
    var SearchTerm = document.getElementById("search-input").value.toLowerCase();

    //Check if Search Bar is Empty
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

    //Find Matches for Each Element
    var LargestMatch = 0;
    for(var x = 0; x < SearchOptions.length; x++){

        html = SearchOptions[x].element;
        //SearchOptions[x].matches = html.search(SearchTerm);
        SearchOptions[x].matches = SearchOptions[x].tags.toLowerCase().search(SearchTerm);

        if(SearchOptions[x].matches > LargestMatch){
            LargestMatch = SearchOptions[x].matches;
        }
    }

    //Order The Elements By Matches
    var SearchAccuracy = 2;
    for(var y = LargestMatch; y > 0; y--){
        for(var x = 0; x < SearchOptions.length; x++){
            if(SearchOptions[x].matches == y){
                SearchOptionsDisplay.push(SearchOptions[x].element);
            }
        }
    }

    //Write to Page
    $(".search-list").html(SearchOptionsDisplay.join(""));
}

function SearchLinkPressed(thisElement){
    var ClassList = $(thisElement).attr('class').split(/\s+/);

    //Loop through each class
    for (var x = 0; x < ClassList.length; x++) {
        //Class containing page is found
        if (ClassList[x].substring(0, 10) === "link-page-") {

            //Set page
            SetPage(ClassList[x].split("link-page-")[1]);
            break;
        }
    }

    //Hide Search Bar

    document.getElementById("search-input").value = "";
    Search();
}


