function shouMenu() {
    if (document.querySelector("#nav").style.height == "50pt") {
        document.querySelector("#nav").style.height = "230pt";
        document.querySelector("#nav-right").style.height = "180pt";
        document.querySelector("#nav-right").style.visibility = "visible";
        document.querySelector("#nav-left").classList.add("mobile-border-bottom");
    }
    else {
        document.querySelector("#nav").style.height = "50pt";
        document.querySelector("#nav-right").style.height = "0";
        document.querySelector("#nav-right").style.visibility = "hidden";
        document.querySelector("#nav-left").classList.remove("mobile-border-bottom");
    }
}