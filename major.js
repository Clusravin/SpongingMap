var majorList = new List(document.querySelector("#major>#content>#majorUp"), document.querySelector("#major>#content>#majorDown"));

majorList.search = function(clss) {
    for (var i = 0; i < major.length; i++) {
        if (major[i].abbr == clss) {
            writePeopleList(i);

            this.quantity = major[i].quantity;

            break;
        }
    }
}

var major_peoplePart = document.querySelector("#major>#content>#peoplePart");

function writePeopleList(i) {
    major_peoplePart.innerHTML = "";

    var found = 0;
    for (var j = 0; j < major[i].major.length; j++) {
        for (var k = 0; k < people.length && found < majorList.startNum + listCapasity; k++) {
            if (people[k].major == major[i].major[j]) {
                if (found >= majorList.startNum) {
                    addPeopleInfo(major_peoplePart, k, true, true, false, false);
                }

                found++;
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