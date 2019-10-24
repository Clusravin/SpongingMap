var namelist = document.querySelector("#namelist");

for (var i = 0; i < people.length; i++) {
    namelist.innerHTML += '<div class="individual">\
        <img id="photo" class="people" src="images/profile photo/' + i + '.jpeg">\
        <div>\
        <h3 id="name" class="people">' + people[i].name + '</h3>\
        <p id="school" class="people">' + people[i].school + '</p>\
        </div>\
        </div>';

    if (typeof (people[i].major) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p id="major" class="people">' + people[i].major + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].position) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p id="position" class="people">' + people[i].position + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].subject) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p id="subject" class="people">' + people[i].subject + '</p>\
            </div>\
            </div>';
    }
}