var peoplePart = document.querySelector("#namelist>#peoplePart");

function showNamelist() {
    peoplePart.innerHTML = "";

    for (var i = 0; i < people.length; i++) {
        addPeopleInfo(peoplePart, i, true, true, true, true);
    }
}

function onloadOther() {
    showNamelist();
}

function onresizeOther() {}