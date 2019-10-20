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
    schoolPart.innerHTML = '<img id="emblem" class="school" src="images/school emblem/' + i + '.jpeg">\
        <h3 id="name" class="school">' + school[i].name + '</h3>\
        <a id="location" class="school" href="' + school[i].url + '" target="_blank">' + school[i].location + '</a>';
}

function writePeopleList(i) {
    peoplePart.innerHTML = "";

    var found = 0;
    for (var j = 0; j < people.length && found < startNum + listCapasity; j++) {
        if (people[j].school == school[i].name) {
            if (found >= startNum) {
                addPeopleInfo(j);
            }

            found++;
        }
    }
}

function addPeopleInfo(i) {
    peoplePart.innerHTML += '<img id="photo" class="people" src="images/profile photo/' + i + '.jpeg">\
        <h3 id="name" class="people">' + people[i].name + '</h3>';

    if (typeof (people[i].major) != "undefined") {
        peoplePart.innerHTML += '<p id="major" class="people">' + people[i].major + '</p>';
    }

    if (typeof (people[i].position) != "undefined") {
        peoplePart.innerHTML += '<p id="position" class="people">' + people[i].position + '</p>';
    }

    if (typeof (people[i].subject) != "undefined") {
        peoplePart.innerHTML += '<p id="subject" class="people">' + people[i].subject + '</p>';
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