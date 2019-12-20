var classShown = "";

function applyButtonEffect(clss) {
    var dark = "#616161";
    var light = "#ffffff";

    if (classShown != "") {
        var previousButton = document.querySelector("#major>#catalog>#" + classShown);

        previousButton.style.background = light;
        previousButton.style.color = "black";
    }

    var button = document.querySelector("#major>#catalog>#" + clss);
    
    button.style.background = dark;
    button.style.color = light;    
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

function onloadOther() {
    fillUp(catalog, 112);
    fillUp(content, 128);
}

function onresizeOther() {
    fillUp(catalog, 112);
    fillUp(content, 128);
}