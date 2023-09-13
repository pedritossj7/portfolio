'use strict';

window.onload = function() {
    let logo = document.getElementById("logo");

    logo.addEventListener("click", () => {
        loadingScreen.style.animation = "loadingSection 1.5s ease-in forwards";
        setTimeout(function() {
            window.location = "index.html";
        }, 1000);
    });
}