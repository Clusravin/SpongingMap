var infoContainer = document.querySelector("#info");

function resizeInfo() {
    var height = document.documentElement.clientHeight;

    infoContainer.style.height = height + "px";
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

var infoUp = document.querySelector("#infoUp");
var infoDown = document.querySelector("#infoDown");

class List {
    constructor(container, upButton, downButton) {
        this.container = container;
        this.upButton = upButton;
        this.downButton = downButton;

        this.startNum = 0;
        this.quantity = 0;
        this.classShown = "";
    }

    updateButton() {
        if (this.startNum > 0) {
            this.upButton.style.visibility = "visible";
        }
        else {
            this.upButton.style.visibility = "hidden";
        }
    
        if (this.startNum + listCapasity < this.quantity) {
            this.downButton.style.visibility = "visible";
        }
        else {
            this.downButton.style.visibility = "hidden";
        }
    }

    up() {
        this.startNum -= listCapasity;
    
        this.show(this.classShown);
    }
    
    down() {
        this.startNum += listCapasity;
    
        this.show(this.classShown);
    }

    show(clss) {
        if (clss != this.classShown) {
            this.startNum = 0;
        }
    
        this.classShown = clss;
    
        this.container.style.display = "flex";

        for (var i = 0; i < school.length; i++) {
            if (school[i].abbr == clss) {
                writeSchoolInfo(i);
                writePeopleList(i);
    
                this.quantity = school[i].quantity;
    
                break;
            }
        }
    
        this.updateButton();
    }
}

var info = new List(infoContainer, infoUp, infoDown);

var listCapasity = 0;

function getListCapasity() {
    var height = document.body.clientHeight;

    listCapasity = parseInt(height / 100);
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
    for (var j = 0; j < people.length && found < info.startNum + listCapasity; j++) {
        if (people[j].school == school[i].name) {
            if (found >= info.startNum) {
                addPeopleInfo(peoplePart, j, false, true, true, true);
            }

            found++;
        }
    }
}

function addPeopleInfo(container, i, schoolIncluded, majorIncluded, positionIncluded, subjectIncluded) {
    container.innerHTML += '<div class="individual">\
    <img id="photo" src="images/profile photo/' + i + '.jpeg">\
    <div>\
    <h3 id="name">' + people[i].name + '</h3>\
    </div>\
    </div>';
 
    if (typeof (people[i].school) != "undefined" && schoolIncluded) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 16) + '<p id="major">' + people[i].school + '</p>\
        </div>\
        </div>';
    }

    if (typeof (people[i].major) != "undefined" && majorIncluded) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 16) + '<p id="major">' + people[i].major + '</p>\
        </div>\
        </div>';
    }

    if (typeof (people[i].position) != "undefined" && positionIncluded) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 16) + '<p id="position">' + people[i].position + '</p>\
        </div>\
        </div>';
    }

    if (typeof (people[i].subject) != "undefined" && subjectIncluded) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 16) + '<p id="subject">' + people[i].subject + '</p>\
        </div>\
        </div>';
    }
}

function hideInfo() {
    info.container.style.display = "none";
}