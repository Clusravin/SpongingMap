var namelist_peoplePart = document.querySelector("#namelist>#peoplePart");

function showNamelist() {
    namelist_peoplePart.innerHTML = "";

    for (var i = 0; i < people.length; i++) {
        addPeopleInfo(namelist_peoplePart, i, true, true, true, true);
    }
}

function onloadOther() {
    showNamelist();
}

function onresizeOther() {}