
function full_menu(){
    var nav = document.getElementById("nav_full");
    var body = document.body;
    if(nav.style.display == "block"){
        nav.style.display = "none";
        body.style.overflow="scroll";
    }
    else{
        nav.style.display = "block";
        body.style.overflow="hidden";
    }
}