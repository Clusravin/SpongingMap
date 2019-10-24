var namelist = document.querySelector("#namelist");

for (var i = 0; i < people.length; i++) {
    namelist.innerHTML += '<div class="individual">\
        <img class="photo people" src="images/profile photo/' + i + '.jpeg">\
        <div>\
        <h3 class="name people">' + people[i].name + '</h3>\
        <p class="school people">' + people[i].school + '</p>\
        </div>\
        </div>';

    if (typeof (people[i].major) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p class="major people">' + people[i].major + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].position) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p class="position people">' + people[i].position + '</p>\
            </div>\
            </div>';
    }

    if (typeof (people[i].subject) != "undefined") {
        namelist.innerHTML = namelist.innerHTML.substring(0, namelist.innerHTML.length - 22) + '<p class="subject people">' + people[i].subject + '</p>\
            </div>\
            </div>';
    }
}