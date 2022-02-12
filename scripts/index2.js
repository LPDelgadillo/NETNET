import {apiPeliculas} from "./data.js"

const contVideos = document.getElementById("populares");

function mostrarPeliculas(Peliculas) {

    contVideos.innerHTML = ``

    Peliculas.forEach(element => {


        const { imagen, id, name } = element;

        const mostarDiv = document.createElement("img");

        mostrarDiv.innerHTML = `
        <img onclick="${id}" id="${id}" src="${imagen}" alt="${name}">

         `

        main.appendChild(mostarDiv)

        if (document.getElementsByClassName('img') == onclick) {
            console.log(imagen)
        }
    });

}
mostrarPeliculas(apiPeliculas);
