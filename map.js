var hive = document.querySelectorAll(".hive");

for (var i = 0; i < hive.length; i++) {
    hive[i].innerHTML = '<div id="outer">\
    <button id="a" onclick="zoomIn()"></button>\
    <button id="b" onclick="zoomIn()"></button>\
    <button id="c" onclick="zoomIn()"></button>\
    </div>\
    <div id="inner">\
    <button id="a" onclick="zoomIn()"></button>\
    <button id="b" onclick="zoomIn()"></button>\
    <button id="c" onclick="zoomIn()"></button>\
    </div>';
}

var main = document.querySelector("#map");
var map = [document.querySelector("#beijing"), document.querySelector("#china"), document.querySelector("#world")];

var zoomOutButton = document.querySelector("#zoomOut");

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

function zoomOut() {
    if (level < 2) {
        level++;
    }

    if (level == 2) {
        zoomOutButton.style.display = "none";
    }
    else {
        zoomOutButton.style.display = "flex";
    }

    updateMap();
}

function zoomIn() {
    if (level > 0) {
        level--;
    }
    else {
        infoList.show("thc");
    }

    zoomOutButton.style.display = "flex";

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