var majorlist = document.querySelector("#majorlist");

for (var i = 0; i < major.length; i++) {
    majorlist.innerHTML += '<h3 class="class">' + major[i].class + '</h3>';

    for (var j = 0; j < major[i].major.length; j++) {
        for (var k = 0; k < people.length; k++) {
            if (people[k].major == major[i].major[j]) {
                addPeopleInfo(majorlist, k, true, true, false, false);
            }
        }
    }
}