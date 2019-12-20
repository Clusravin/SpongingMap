let navHeightFolded = ["3rem", "4rem", "4rem"];
let navHeightExpanded = ["15.1rem", "20.1rem"];
let navRightHeightFolded = "0";
let navRightHeightExpanded = ["12rem", "16rem"];
let navRightHeightDefault = "1.5rem";

var nav = document.querySelector("#nav");

insertNav();

var navLeft = document.querySelector("#nav-left");
var navRight = document.querySelector("#nav-right");
 
var copyright = document.querySelector("#copyright");

insertCopyright();

var main = document.querySelector(".main");

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
    <a href="major.html">专业</a>\
    </li>\
    <li class="tablet-border-bottom">\
    <a href="http://clusravin.gitee.io/classweekly" target="_blank">往期周记</a>\
    </li>\
    <li>\
    <a href="https://github.com/MartainCreature/SpongingMap" target="_blank">\
    <img src="images/github.svg" alt="github"></img>\
    </a>\
    </li>\
    </ul>\
    </div>';
}

function insertCopyright() {
    var date = new Date;
    var year = date.getFullYear();

    if (year == 2019) {
        copyright.innerHTML = "<p>&copy; 2019 范子睿</p>";
    }
    else {
        copyright.innerHTML = "<p>&copy; 2019-" + year + " 范子睿</p>";
    }
}

let tabletMaxWidth = 992;
let mobileMaxWidth = 768;

var widthIndex = 0;

getWidthIndex();

function getWidthIndex() {
    var width = document.documentElement.clientWidth;

    if (width > tabletMaxWidth) {
        widthIndex = 2;
    }
    else if (width > mobileMaxWidth) {
        widthIndex = 1;
    }
    else {
        widthIndex = 0;
    }
}

function menuIsFolded() {
    if (nav.style.height == navHeightFolded[widthIndex]) {
        return true;
    }
    else {
        return false;
    }
}

function expandMenu() {
    nav.style.height = navHeightExpanded[widthIndex];
    navLeft.style.height = navHeightFolded[widthIndex];
    navRight.style.height = navRightHeightExpanded[widthIndex];
    navRight.style.visibility = "visible";
}

function foldMenu() {
    nav.style.height = navHeightFolded[widthIndex];
    navLeft.style.height = navHeightFolded[widthIndex];
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
    var width = document.documentElement.clientWidth;

    nav.style.height = navHeightFolded[widthIndex];
    navLeft.style.height = navHeightFolded[widthIndex];

    if (width > tabletMaxWidth) {
        navRight.style.height = navRightHeightDefault;
        navRight.style.visibility = "visible";
    }
    else {
        navRight.style.height = navRightHeightFolded;
        navRight.style.visibility = "hidden";
    }
}

function fillUp(container, margin) {
    var height = document.documentElement.clientHeight;
    
    container.style.height = height - margin + "px";
    console.log(height + " " + container.style.height);
}

window.onload = function () {
    getWidthIndex();

    fillUp(main, 0);

    onloadOther();
}

window.onresize = function () {
    getWidthIndex();

    updateMenu();

    fillUp(main, 0);

    onresizeOther();
}

window.onscroll = function () {
    fillUp(main, 0);
}

window.onorientationchange = function () {
    getWidthIndex();

    updateMenu();
    
    fillUp(main, 0);

    onresizeOther();
}