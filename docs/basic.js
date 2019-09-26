let navHeightFolded = "4rem";
let navHeightExpanded = "20.1rem";
let navRightHeightFolded = "0";
let navRightHeightExpanded = "16rem";

var nav = document.querySelector("#nav");
var navLeft = document.querySelector("#nav-left");
var navRight = document.querySelector("#nav-right");
var main = document.querySelector(".main");
var copyright = document.querySelector("#copyright");

function insertNav() {
    nav.innerHTML = '<div id="nav-left">\
            <button class="hidden" type="button">\
                <img src="images/menu.svg" alt="menu">\
            </button>\
            \
            <h1>\
                <a href="index.html">直升机班的蹭饭地图</a>\
            </h1>\
            \
            <button type="button" onclick="toggleMenu()">\
                <img src="images/menu.svg" alt="menu">\
            </button>\
        </div>\
        \
        <div id="nav-right">\
            <ul>\
                <li class="tablet-border-bottom">\
                    <a href="namelist.html">花名册</a>\
                </li>\
                <li class="tablet-border-bottom">\
                    <a href="major.html">蹭专业</a>\
                </li>\
                <li class="tablet-border-bottom">\
                    <a href="https://martaincreature.github.io/ClassWeekly/">往期周记</a>\
                </li>\
                <li>\
                    <a href="https://github.com/MartainCreature/SpongingMap"><img src="images/github.svg"\
                            alt="github"></img></a>\
                </li>\
            </ul>\
        </div>';
}

function insertCopyright() {
    var date = new Date;
    var year = date.getFullYear();

    copyright.innerHTML = "<p>&copy; " + year + " 范子睿</p>";
}

function resizeMain() {
    var height = document.documentElement.clientHeight;

    main.style.height = height - (4 + 2) * 16 + "px";
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

function updateMenu() {
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

window.onload = function() {
    resizeMain();
    
    insertNav();

    insertCopyright();
}

window.onresize = function() {
    resizeMain();
    
    updateMenu();
}