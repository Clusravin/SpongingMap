var namelistList = new List(document.querySelector("#namelistUp"), document.querySelector("#namelistDown"));

namelistList.quantity = 39;

var namelist_peoplePart = document.querySelector("#peoplePart");

namelistList.search = function(clss) {
    namelist_peoplePart.innerHTML = "";

    for (var i = 0; i < people.length && i < listCapasity; i++) {
        addPeopleInfo(namelist_peoplePart, i + namelistList.startNum, true, true, true, true);
    }
}

function onloadOther() {
    getListCapasity();
    
    namelistList.show('');
}

function onresizeOther() {
    getListCapasity();
}