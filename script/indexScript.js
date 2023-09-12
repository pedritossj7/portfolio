'use strict';

window.onload = function() {
    let main = document.getElementsByTagName("main")[0];
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");

    section2.addEventListener("click", function() {
        window.location = "experience.html";
    });

    section3.addEventListener("click", function() {
        window.location = "aboutMe.html";
    });
}