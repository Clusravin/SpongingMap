var listCapasity = 0;

function getListCapasity() {
    var height = document.body.clientHeight;

    listCapasity = parseInt(height / 100);
}

class List {
    constructor(upButton, downButton) {
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
    
        this.search(clss);
    
        this.updateButton();
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