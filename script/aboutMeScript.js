'use strict';

window.onload = function() {
    // Configuración para el logo (evento onclick que activa la pantalla de carga)
    let logo = document.getElementById("logo");

    logo.addEventListener("click", () => {
        loadingScreen.style.animation = "loadingSection 1.5s ease-in forwards";
        setTimeout(function() {
            window.location = "index.html";
        }, 1000);
    });

    // Configuración para la gráfica de ChartJS
    let ctx = document.getElementById("grafica").getContext("2d");

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['HTML', 'CSS', 'JS', 'JAVA', 'PHP'],
            datasets: [{
                data: [90, 85, 80, 70, 70],
                backgroundColor: ['#FFD900', '#FFB700', '#FF9000', '#FF7000', '#FF5000'],
            }]
        },
        options:{
            responsive: true,
        }
    });
}