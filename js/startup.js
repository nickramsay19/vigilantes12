//Global Variables
var PageShell = $("#page-shell");
var Components = $("#components");

//Fill Components
$.get("../components.html", function(data){
    Components.html(data);
}, 'text');
