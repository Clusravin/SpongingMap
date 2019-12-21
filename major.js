var classShown = "";

function applyButtonEffect(clss) {
    var down = { width: "11rem", height: "2.4rem", margin: "0.2rem 0", border: "solid none solid solid" };
    var up = { width: "10rem", height: "1.4rem", margin: "0", border: "none" }

    if (classShown != "") {
        var previousButton = document.querySelector("#major>#catalog>#majorPart>#" + classShown);

        previousButton.style.width = up.width;
        previousButton.style.height = up.height;
        previousButton.style.margin = up.margin;
        previousButton.style.borderStyle = up.border;
    }

    var button = document.querySelector("#major>#catalog>#majorPart>#" + clss);

    button.style.width = down.width;
    button.style.height = down.height;
    button.style.margin = down.margin;
    button.style.borderStyle = down.border;
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