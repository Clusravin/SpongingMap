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
    
    switch (level) {
        case 0:
            map[0].scrollTop = 3000;
            map[0].scrollLeft = 1500;

        case 1:
            map[1].scrollTop = 300;
            map[1].scrollLeft = 1000;
            
        case 2:
            map[2].scrollTop = 200;
            map[2].scrollLeft = 1000;
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