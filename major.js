var classShown = "";

function applyButtonEffect(clss) {
    if (classShown != "") {
        var previousButton = document.querySelector("#major>#catalog>#" + classShown);

        previousButton.style.background = "#fff";
    }

    var button = document.querySelector("#major>#catalog>#" + clss);
    
    button.style.background = "#ccc";
}

var content = document.querySelector("#major>#content");

function showMajor(clss) {
    content.style.visibility = "visible";

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

function onloadOther() {
    getListCapasity();
}

function onresizeOther() {
    getListCapasity();
}