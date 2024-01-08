'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Configuración para la gráfica de ChartJS
    let ctx = document.getElementById("grafica").getContext("2d");

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['HTML', 'CSS', 'JS', 'JAVA', 'PHP'],
            datasets: [{
                data: [90, 85, 80, 70, 70],
                backgroundColor: ['#651366', '#a71a5b', '#e7204e', '#f76e2a', '#f0c505'],
            }]
        },
        options:{
            responsive: false,
            hover: null,
        }
    });
});