var infoContainer = document.querySelector("#info");

function fillUp(container) {
    var height = document.documentElement.clientHeight;

    container.style.height = height + "px";
}

function onloadOther() {
    fillUp(infoContainer);

    getListCapasity();
}

function onresizeOther() {
    fillUp(infoContainer);

    getListCapasity();
}

var infoList = new List(document.querySelector("#infoUp"), document.querySelector("#infoDown"));

infoList.search = function(clss) {
    infoContainer.style.display = "flex";

    for (var i = 0; i < school.length; i++) {
        if (school[i].abbr == clss) {
            writeSchoolInfo(i);
            writePeopleList(i);

            this.quantity = school[i].quantity;

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

    var found = 0;
    for (var j = 0; j < people.length && found < info.startNum + listCapasity; j++) {
        if (people[j].school == school[i].name) {
            if (found >= info.startNum) {
                addPeopleInfo(info_peoplePart, j, false, true, true, true);
            }

            found++;
        }
    }
}

function hideInfo() {
    infoContainer.style.display = "none";
}