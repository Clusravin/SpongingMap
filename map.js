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

fillUp(main, 0);

fillUp(map[0], 0);
fillUp(map[1], 0);
fillUp(map[2], 0);

updateMap();

function updateMap() {
    for (var i = 0; i < 3; i++) {
        if (i == level) {
            map[i].style.display = "block";
        }
        else {
            map[i].style.display = "none";
        }
    }

    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    var top = -(height - 64) / 2;
    var left = -width / 2;

    switch (level) {
        case 0:
            top += 3550;
            left += 2450;
            break;

        case 1:
            top += 600;
            left += 1300;
            break;
    
        case 2:
            top += 600;
            left += 2000;
            break;
    }

    map[level].scrollTop = top;
    map[level].scrollLeft = left;    
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
        
        updateMap();
    }
    else {
        showInfo("thc");
    }

    zoomOutButton.style.display = "flex";
}

var x0, y0;
var left0, top0;
var down = false;

main.onmousedown = function (e) {
    e.preventDefault();

    x0 = e.clientX;
    y0 = e.clientY;

    down = true;
}

window.onmousemove = function (e) {
    if (down) {
        var x = e.clientX;
        var y = e.clientY;

        var left = x0 - x;
        var top = y0 - y;

        map[level].scrollLeft += left / 50;
        map[level].scrollTop += top / 50;
    }
}

main.onmouseup = function () {
    down = false;
} 