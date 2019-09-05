let navHeightFolded = "4rem";
let navHeightExpanded = "20.1rem";
let navRightHeightFolded = "0";
let navRightHeightExpanded = "16rem";

let nav = document.querySelector("#nav");
let navLeft = document.querySelector("#nav-left");
let navRight = document.querySelector("#nav-right");
let main = document.querySelector(".main");
let copyright = document.querySelector("#copyright");

function resizeMain() {
    let height = document.documentElement.clientHeight;

    main.style.height = height + "px";
}

function insertYear() {
    let date = new Date;
    let year = date.getFullYear();

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

    let width = document.documentElement.clientWidth;

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