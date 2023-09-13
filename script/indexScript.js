'use strict';

window.onload = function() {
    let main = document.getElementsByTagName("main")[0];
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");

    let loadingScreen = document.getElementById("loadingScreen");

    section2.addEventListener("click", function() {
        loadingScreen.style.animation = "loadingSection 1.5s ease-in forwards";
        setTimeout(function() {
            window.location = "experience.html";
        }, 1000);
    });

    section3.addEventListener("click", function() {
        loadingScreen.style.animation = "loadingSection 1.5s ease-in forwards";
        setTimeout(function() {
            window.location = "aboutMe.html";
        }, 1000);
    });
}