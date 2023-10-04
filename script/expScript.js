'use strict';

// AQUÍ SE LE HIZO UNA PETICIÓN ASÍNCRONA AL JSON DE PROYECTOS
let URL_github = 'https://pedritossj7.github.io/portfolio/script/projects.json';
let URL_localhost = '../portfolio/script/projects.json';
const URL = URL_localhost;

async function peticion_asincrona(enlace) {
    const respuesta = await fetch(enlace);
    const projects = await respuesta.json();

    for (var i = 0; i < projects.length; i++) {
        console.log(projects[i]);

        let main = document.body.getElementsByTagName("main")[0];

        var sectionProject = document.createElement("section");
        
        if (i % 2 == 1) {
            sectionProject.setAttribute("class", "d-flex flex-row flex-lg-row-reverse flex-wrap justify-content-center p-0 mb-3");
        }
        else {
            sectionProject.setAttribute("class", "d-flex flex-row flex-wrap align-center justify-content-center p-0 mb-3");
        }

        main.appendChild(sectionProject);

        var div1 = document.createElement("div");
        div1.setAttribute("class", "p-3 col-md-12 col-lg-7 d-flex flex-column justify-content-center p-2");
        sectionProject.appendChild(div1);

        var divTitulo = document.createElement("div");
        divTitulo.setAttribute("class", "mb-2");
        div1.appendChild(divTitulo);

        var h1_titulo = document.createElement("h1");
        h1_titulo.setAttribute("class", "m-0");
        h1_titulo.append(document.createTextNode(projects[i].name));
        divTitulo.appendChild(h1_titulo);

        var h3_titulo = document.createElement("h3");
        h3_titulo.setAttribute("class", "m-0");
        h3_titulo.append(document.createTextNode(projects[i].start+" - "+projects[i].end));
        divTitulo.appendChild(h3_titulo);

        var parrafo = document.createElement("p");
        parrafo.setAttribute("class", "my-2");
        parrafo.append(document.createTextNode(projects[i].description));
        div1.appendChild(parrafo);

        var div2 = document.createElement("div");
        div2.setAttribute("id", "carousel"+i);
        div2.setAttribute("class", "carousel slide col-md-12 col-lg-5");
        div2.setAttribute("data-bs-ride", "carousel");
        sectionProject.appendChild(div2);

        var carousel_inner = document.createElement("div");
        carousel_inner.className = "carousel-inner w-100 h-100";
        div2.appendChild(carousel_inner);

        for (var j = 0; j < projects[i].photos.length; j++) {
            var carousel_item = document.createElement("div");

            if (j == 0) {
                carousel_item.setAttribute("class", "carousel-item active");
            }
            else {
                carousel_item.setAttribute("class", "carousel-item");
            }

            var img_Carousel = document.createElement("img");
            img_Carousel.src = projects[i].photos[j];
            img_Carousel.setAttribute("class", "d-block w-100");
            img_Carousel.alt = projects[i].photos[j];

            carousel_item.appendChild(img_Carousel);
            carousel_inner.appendChild(carousel_item);

            // FALTA Crear botones para retroceder y avanzar imagen
            var buttonPrev = document.createElement("button");
            buttonPrev.setAttribute("class", "carousel-control-prev");
            buttonPrev.type = "button";
            buttonPrev.setAttribute("data-bs-target", "#carousel"+i);
            buttonPrev.setAttribute("data-bs-slide", "prev");

            var buttonPrev_span1 = document.createElement("span");
            buttonPrev_span1.className = "carousel-control-prev-icon";
            buttonPrev_span1.setAttribute("aria-hidden", "true");
            buttonPrev.appendChild(buttonPrev_span1);

            var buttonPrev_span2 = document.createElement("span");
            buttonPrev_span2.className = "visually-hidden";
            buttonPrev_span2.append(document.createTextNode("Previous"));
            buttonPrev.appendChild(buttonPrev_span2);
            
            div2.appendChild(buttonPrev);

            var buttonNext = document.createElement("button");
            buttonNext.setAttribute("class", "carousel-control-next");
            buttonNext.type = "button";
            buttonNext.setAttribute("data-bs-target", "#carousel"+i);
            buttonNext.setAttribute("data-bs-slide", "next");

            var buttonNext_span1 = document.createElement("span");
            buttonNext_span1.className = "carousel-control-next-icon";
            buttonNext_span1.setAttribute("aria-hidden", "true");
            buttonNext.appendChild(buttonNext_span1);

            var buttonNext_span2 = document.createElement("span");
            buttonNext_span2.className = "visually-hidden";
            buttonNext_span2.append(document.createTextNode("Next"));
            buttonNext.appendChild(buttonNext_span2);
            
            div2.appendChild(buttonNext);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    //console.log(main);
    peticion_asincrona(URL);
});