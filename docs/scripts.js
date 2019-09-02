var nav = document.querySelector("#nav");
var navLeft = document.querySelector("#nav-left");
var navRight = document.querySelector("#nav-right");

function menuIsFolded() {
    if (nav.style.height == "50pt") {
        return true;
    }
    else {
        return false;
    }
}

function expandMenu() {
    nav.style.height = "230pt";
    navRight.style.height = "180pt";
    navRight.style.visibility = "visible";
    navLeft.classList.add("mobile-border-bottom");
}

function foldMenu() {
    nav.style.height = "50pt";
    navRight.style.height = "0";
    navRight.style.visibility = "hidden";
    navLeft.classList.remove("mobile-border-bottom");
}


function toggleMenu() {
    if (menuIsFolded()) {
        expandMenu();
    }
    else {
        foldMenu();
    }
}

window.onresize = function() {
    location.reload();
}