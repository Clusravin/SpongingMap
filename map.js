var hive = document.querySelectorAll(".hive");

for (var i = 0; i < hive.length; i++) {
    hive[i].innerHTML = '<div id="outer">\
            <button id="a" onclick="down()"></button>\
            <button id="b" onclick="down()"></button>\
            <button id="c" onclick="down()"></button>\
        </div>\
        <div id="inner">\
            <button id="a" onclick="down()"></button>\
            <button id="b" onclick="down()"></button>\
            <button id="c" onclick="down()"></button>\
        </div>';
}

var main = document.querySelector("#map");
var map = [document.querySelector("#beijing"), document.querySelector("#china"), document.querySelector("#world")];

var upButton = document.querySelector("#up");

var level = 0;

function updateMap() {
    for (var i = 0; i < 3; i++) {
        if (i == level) {
            map[i].style.display = "block";
        }
        else {
            map[i].style.display = "none";
        }
    }
}

function up() {
    if (level < 2) {
        level++;
    }

    if (level == 2) {
        upButton.style.display = "none";
    }
    else {
        upButton.style.display = "flex";
    }

    updateMap();
}

function down() {
    if (level > 0) {
        level--;
    }
    else {
        showInfo("thc");
    }

    upButton.style.display = "flex";

    updateMap();
}

var x0, y0;
var left0, top0;
var isDown = false;

main.onmousedown = function (e) {
    e.preventDefault();

    x0 = e.clientX;
    y0 = e.clientY;

    left0 = map[level].offsetLeft;
    top0 = map[level].offsetTop;

    isDown = true;
}

window.onmousemove = function (e) {
    if (isDown) {
        var x = e.clientX;
        var y = e.clientY;

        var left = x - (x0 - left0);
        var top = y - (y0 - top0);

        map[level].style.left = left + 'px';
        map[level].style.top = top + 'px';
    }
}

main.onmouseup = function () {
    isDown = false;
}

var info = document.querySelector("#info");

function resizeInfo() {
    var height = document.documentElement.clientHeight;

    info.style.height = height + "px";
}

function onloadOther() {
    resizeInfo();
}

function onresizeOther() {
    resizeInfo();
}

function showInfo(name) {
    info.style.display = "flex";
}

function hideInfo() {
    info.style.display = "none";
}   