var peoplePart = document.querySelector("#namelist>#peoplePart");

function showNamelist() {
    peoplePart.innerHTML = "";

    for (var i = 0; i < people.length; i++) {
        addPeopleInfo(peoplePart, i, true, true, true, true);
    }
}

var namelist = document.querySelector("#namelist");

function onloadOther() {
    showNamelist();

    fillUp(namelist, 64);
}

function onresizeOther() {
    fillUp(namelist, 64);
}