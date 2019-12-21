var classShown = "";

function applyButtonEffect(clss) {
    var down = { background: "#616161", color: "#ffffff", width: "11rem", height: "2rem", fontSize: "1rem" };
    var up = { background: "#ffffff", color: "#000000", width: "10rem", height: "1.4rem", fontSize: "0.5rem" }

    if (classShown != "") {
        var previousButton = document.querySelector("#major>#catalog>#majorPart>#" + classShown);

        previousButton.style.background = up.background;
        previousButton.style.color = up.color;
        previousButton.style.width = up.width;
        previousButton.style.height = up.height;
        previousButton.style.fontSize = up.fontSize;
    }

    var button = document.querySelector("#major>#catalog>#majorPart>#" + clss);

    button.style.background = down.background;
    button.style.color = down.color;
    button.style.width = down.width;
    button.style.height = down.height;
    button.style.fontSize = down.fontSize;
}

var content = document.querySelector("#major>#content");

function showMajor(clss) {
    content.style.display = "block";

    for (var i = 0; i < major.length; i++) {
        if (major[i].abbr == clss) {
            writePeopleList(i);

            break;
        }
    }

    applyButtonEffect(clss);

    classShown = clss;
}

var peoplePart = document.querySelector("#major>#content>#peoplePart");

function writePeopleList(i) {
    peoplePart.innerHTML = "";

    for (var j = 0; j < major[i].major.length; j++) {
        for (var k = 0; k < people.length; k++) {
            if (people[k].major == major[i].major[j]) {
                addPeopleInfo(peoplePart, k, true, true, false, false);
            }
        }
    }
}

var catalog = document.querySelector("#major>#catalog");
var majorPart = document.querySelector("#major>#catalog>#majorPart");

function onloadOther() {
    fillUp(catalog, 64);
    fillUp(majorPart, 112);
    fillUp(content, 128);
}

function onresizeOther() {
    fillUp(catalog, 64);
    fillUp(majorPart, 112);
    fillUp(content, 128);
}