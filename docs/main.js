let navHeightFolded = "4rem";
let navHeightExpanded = "20.1rem";
let navRightHeightFolded = "0";
let navRightHeightExpanded = "16rem";

var nav = document.querySelector("#nav");
var navLeft = document.querySelector("#nav-left");
var navRight = document.querySelector("#nav-right");
var main = document.querySelector(".main");
var copyright = document.querySelector("#copyright");

function resizeMain() {
    var height = document.documentElement.clientHeight;

    main.style.height = height - 4 * 16 + "px";
}

function insertYear() {
    var date = new Date;
    var year = date.getFullYear();

    copyright.innerHTML = "<p>&copy; " + year + " 清华附中朝阳学校2019届3班</p>";
}

function init() {
    resizeMain();

    insertYear();
}

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
}

function foldMenu() {
    nav.style.height = navHeightFolded;
    navRight.style.height = navRightHeightFolded;
    navRight.style.visibility = "hidden";
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

    var width = document.documentElement.clientWidth;

    if (width > tabletMaxWidth) {
        nav.style.height = navHeightFolded;
        navRight.style.height = "auto";
        navRight.style.visibility = "visible";
    }
    else {
        nav.style.height = navHeightFolded;
        navRight.style.height = navRightHeightFolded;
        navRight.style.visibility = "hidden";
    }
}