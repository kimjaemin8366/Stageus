function full_menu(){
    var nav_visible = document.getElementById("nav_full");
    var nav_animation_css = document.getElementById("nav_full_list");
    var var_background_css = document.getElementById("nav_full_background");
    var main_css = document.getElementById("main_content");
    var body_css = document.body;
    var now_window_size = window.outerWidth;

    function close_menu(){
        body_css.style.overflowY ="scroll";
        nav_visible.style.visibility= "hidden";
        nav_animation_css.style.left = "-300px";
        main_css.style.marginLeft = "";
    }

    function open_menu(){
        nav_visible.style.visibility = "visible";
        nav_animation_css.style.left ="0px";
    }

    
    if(now_window_size<1500){ /* 브라우저 크기가 작을 경우*/
        var_background_css.style.display = "block";
        nav_animation_css.style.transition = ".25s";

        if(nav_visible.style.visibility == "visible"){ /* 메뉴 닫을 때*/
            close_menu();
        }
        else{ /* 메뉴 열 때*/
            body_css.style.overflow="hidden";
            open_menu();
        }
    }

    else{ /* 브라우저 크기가 클 경우 */
        var_background_css.style.display= "none";
        nav_animation_css.style.transition = "0s";

        if(nav_visible.style.visibility == "visible") { /* 메뉴를 닫을 때*/
            close_menu();
        }

        else{ /* 메뉴를 열 때*/
            main_css.style.marginLeft = "256px";
            open_menu();
        }
    }
}

function nav_size_check(){
    var nav_size = window.innerHeight-76;
    document.getElementById("nav_full_content").style.height = nav_size+"px";
    
}

window.onload = nav_size_check();

window.onresize = function(){
    var timer = null;
    timer = setTimeout(nav_size_check(), 250);
}