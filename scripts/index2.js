import { apiPeliculas } from "../data/dataPeliculas.js";
const populares = document.getElementById("populares");

const mostrarPeliculas=(Peliculas) =>{
    populares.innerHTML = ``

    Peliculas.forEach(element => {
        const {imagen, id, name } = element;
        const mostrarDiv = document.createElement("img");
        mostrarDiv.innerHTML = `
        <img id="${id}" src="${imagen}" alt="${name}">
         `
        populares.appendChild(mostrarDiv)
    });
}
mostrarPeliculas(apiPeliculas);
