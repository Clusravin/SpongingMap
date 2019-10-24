var majorlist = document.querySelector("#majorlist");

for (var i = 0; i < major.length; i++) {
    majorlist.innerHTML += '<h3 class="class">' + major[i].class + '</h3>';

    for (var j = 0; j < people.length; j++) {
        for (var k = 0; k < major[i].major.length; k++) {
            if (people[j].major == major[i].major[k]) {
                addPeopleInfo(majorlist, j, true, true, false, false);
            }
        }
    }
}