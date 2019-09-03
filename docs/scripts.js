let navHeightFolded = "50pt";
let navHeightExpanded = "230pt";
let navRightHeightFolded = "0";
let navRightHeightExpanded = "180pt";


let nav = document.querySelector("#nav");
let navLeft = document.querySelector("#nav-left");
let navRight = document.querySelector("#nav-right");

function menuIsFolded() {
    if (nav.style.height == navHeightFolded) {
        return true;
    }
    else {
        return false;
    }
}

function expandMenu() {
    nav.style.height = navHeightExpanded;
    navRight.style.height = navRightHeightExpanded;
    navRight.style.visibility = "visible";
    navLeft.classList.add("tablet-border-bottom");
}

function foldMenu() {
    nav.style.height = navHeightFolded;
    navRight.style.height = navRightHeightFolded;
    navRight.style.visibility = "hidden";
    navLeft.classList.remove("tablet-border-bottom");
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
    let tabletMaxWidth = 992;

    let width = document.documentElement.clientWidth;

    if (width > tabletMaxWidth) {
        nav.style.height = navHeightFolded;
        navRight.style.height = "auto";
        navRight.style.visibility = "visible";
        navLeft.classList.remove("tablet-border-bottom");
    }
    else {
        nav.style.height = navHeightFolded;
        navRight.style.height = navRightHeightFolded;
        navRight.style.visibility = "hidden";
        navLeft.classList.remove("tablet-border-bottom");
    }
}