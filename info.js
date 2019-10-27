var info = document.querySelector("#info");

function resizeInfo() {
    var height = document.documentElement.clientHeight;

    info.style.height = height + "px";
}

function onloadOther() {
    resizeInfo();

    getListCapasity();
}

function onresizeOther() {
    resizeInfo();

    getListCapasity();
}

var schoolPart = document.querySelector("#info>#schoolPart");
var peoplePart = document.querySelector("#peoplePart");

var listCapasity = 0;
var startNum = 0;
var quantity = 0;
var schoolShown;

function getListCapasity() {
    var height = document.body.clientHeight;

    listCapasity = parseInt(height / 100);
}

function updateUDButton() {
    var infoUp = document.querySelector("#infoUp");
    var infoDown = document.querySelector("#infoDown");

    if (startNum > 0) {
        infoUp.style.visibility = "visible";
    }
    else {
        infoUp.style.visibility = "hidden";
    }

    if (startNum + listCapasity < quantity) {
        infoDown.style.visibility = "visible";
    }
    else {
        infoDown.style.visibility = "hidden";
    }
}

function infoUp() {
    startNum -= listCapasity;

    showInfo(schoolShown);
}

function infoDown() {
    startNum += listCapasity;

    showInfo(schoolShown);
}

function writeSchoolInfo(i) {
    schoolPart.innerHTML = '<img id="emblem" src="images/school emblem/' + i + '.jpeg">\
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
    peoplePart.innerHTML = "";

    var found = 0;
    for (var j = 0; j < people.length && found < startNum + listCapasity; j++) {
        if (people[j].school == school[i].name) {
            if (found >= startNum) {
                addPeopleInfo(peoplePart, j, false, true, true, true);
            }

            found++;
        }
    }
}

function addPeopleInfo(container, i, includeSchool, includeMajor, includePosition, includeSubject) {
    container.innerHTML += '<div class="individual">\
        <img id="photo" src="images/profile photo/' + i + '.jpeg">\
        <div>\
        <h3 id="name">' + people[i].name + '</h3>\
        </div>\
        </div>';
 
    if (typeof (people[i].school) != "undefined" && includeSchool) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 22) + '<p id="major">' + people[i].school + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].major) != "undefined" && includeMajor) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 22) + '<p id="major">' + people[i].major + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].position) != "undefined" && includePosition) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 22) + '<p id="position">' + people[i].position + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].subject) != "undefined" && includeSubject) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 22) + '<p id="subject">' + people[i].subject + '</p>\
            </div>\
            </div>';
    }
}

function showInfo(abbr) {
    if (abbr != schoolShown) {
        startNum = 0;
    }

    info.style.display = "flex";

    schoolShown = abbr;

    for (var i = 0; i < school.length; i++) {
        if (school[i].abbr == abbr) {
            writeSchoolInfo(i);
            writePeopleList(i);

            quantity = school[i].quantity;

            break;
        }
    }

    updateUDButton();
}

function hideInfo() {
    info.style.display = "none";
}