var classShown = "";

function applyButtonEffect(clss) {
    var down = [{ width: "11rem", height: "2.8rem", margin: "0.3rem 0", border: "solid none solid solid" },
    { width: "auto", height: "1.8rem", margin: "0", border: "solid solid solid solid" }];
    var up = [{ width: "10rem", height: "1.8rem", margin: "0", border: "none" },
    { width: "auto", height: "1.8rem", margin: "0", border: "none" }];

    if (classShown != "") {
        var previousButton = document.querySelector("#major>#catalog>#majorPart>#" + classShown);

        if (widthIndex == 0) {
            previousButton.style.width = up[1].width;
            previousButton.style.height = up[1].height;
            previousButton.style.margin = up[1].margin;
            previousButton.style.borderStyle = up[1].border;
        }
        else {
            previousButton.style.width = up[0].width;
            previousButton.style.height = up[0].height;
            previousButton.style.margin = up[0].margin;
            previousButton.style.borderStyle = up[0].border;
        }
    }

    var button = document.querySelector("#major>#catalog>#majorPart>#" + clss);

    if (widthIndex == 0) {
        button.style.width = down[1].width;
        button.style.height = down[1].height;
        button.style.margin = down[1].margin;
        button.style.borderStyle = down[1].border;
    }
    else {
        button.style.width = down[0].width;
        button.style.height = down[0].height;
        button.style.margin = down[0].margin;
        button.style.borderStyle = down[0].border;
    }
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

var majorContainer = document.querySelector("#major");
var catalog = document.querySelector("#major>#catalog");
var majorPart = document.querySelector("#major>#catalog>#majorPart");

function fillUpContainer() {
    if (widthIndex == 0) {
        fillUp(majorContainer, 64);

        catalog.style.height = "auto";
        majorPart.style.height = "auto";
    }
    else {
        fillUp(catalog, 64);
        fillUp(majorPart, 112);
    }
}

function onloadOther() {
    fillUpContainer();

    fillUp(content, 128);
}

function onresizeOther() {
    fillUpContainer();

    applyButtonEffect(classShown);

    fillUp(content, 128);
}