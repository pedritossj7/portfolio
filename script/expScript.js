'use strict';

// AQUÍ SE LE HIZO UNA PETICIÓN ASÍNCRONA AL JSON DE PROYECTOS
const URL = '/script/projects.json';

async function peticion_asincrona(enlace) {
    const respuesta = await fetch(enlace);
    const projects = await respuesta.json();

    console.log(projects);
}

window.addEventListener('DOMContentLoaded', () => {
    peticion_asincrona(URL);
});