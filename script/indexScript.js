'use strict';

window.onload = function() {
    let main = document.getElementsByTagName("main")[0];
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");

    section1.addEventListener("click", function() {
        section2.style.display = "none";
        section3.style.display = "none";

        main.style.gridTemplateAreas = "'uno'";

        section1.addEventListener("click", function() {
            location.reload();
        });
    });

    section2.addEventListener("click", function() {
        section1.style.display = "none";
        section3.style.display = "none";

        main.style.gridTemplateAreas = "'dos'";

        section2.addEventListener("click", function() {
            location.reload();
        });
    });

    section3.addEventListener("click", function() {
        section1.style.display = "none";
        section2.style.display = "none";

        main.style.gridTemplateAreas = "'tres'";

        section3.addEventListener("click", function() {
            location.reload();
        });
    });
}