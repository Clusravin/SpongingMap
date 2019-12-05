var infoContainer = document.querySelector("#info");

function onloadOther() {
    fillUp(map[0]);
    fillUp(map[1]);
    fillUp(map[2]);

    fillUp(infoContainer);
}

function onresizeOther() {
    fillUp(map[0]);
    fillUp(map[1]);
    fillUp(map[2]);

    fillUp(infoContainer);
}

function showInfo(clss) {
    infoContainer.style.display = "flex";

    for (var i = 0; i < school.length; i++) {
        if (school[i].abbr == clss) {
            writeSchoolInfo(i);
            writePeopleList(i);

            break;
        }
    }
}

var info_schoolPart = document.querySelector("#info>#schoolPart");
var info_peoplePart = document.querySelector("#info>#peoplePart");

function writeSchoolInfo(i) {
    info_schoolPart.innerHTML = '<img id="emblem" src="images/school emblem/' + i + '.jpeg">\
    <div id="right">\
    <h3 id="name">' + school[i].name + '</h3>\
    <div id="bottom">\
    <p id="location">' + school[i].location + '</p>\
    <a id="link" href="' + school[i].url + '" target="_blank">\
    <img src="images/location.svg" alt="location">\
    </a>\
    </div>\
    </div>';
}

function writePeopleList(i) {
    info_peoplePart.innerHTML = "";

    for (var j = 0; j < people.length; j++) {
        if (people[j].school == school[i].name) {
            addPeopleInfo(info_peoplePart, j, false, true, true, true);
        }
    }
}

function hideInfo() {
    infoContainer.style.display = "none";
}