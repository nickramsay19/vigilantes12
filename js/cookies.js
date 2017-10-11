//Dependencies
var $ = require('jquery');
var Cookies = require('js-cookie');

//Set Page From Session Cookies
if(Cookies.get().hasOwnProperty("page")){
    SetPage(Cookies.get("page"));
    document.getElementById('content').scrollIntoView();
}
else{
    SetPage("home");
    document.getElementById('content').scrollIntoView();
}

