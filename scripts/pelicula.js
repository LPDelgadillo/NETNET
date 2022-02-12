const videoA = JSON.parse(localStorage.getItem("video"));
const rep = document.getElementById("main")

window.addEventListener("DOMContentLoaded", ()=>{
        const {imagen, resumen, name, coincidencia, duracion, elenco, direccion, año}= videoA[0]
    
        rep.innerHTML=`
        <div class="seleccionImg">
        <img src="${imagen}" alt="${name}">
    </div>
    <div class="nombrePelicula">
        <h1 >${name}</h1><br><br>
    </div>
    
    <div class="informacion">
        <h3><span>${coincidencia}</span></h3>
        <h3>${año}</h3>
        <button class="R"><h4>R</h4></button>
        <h3>${duracion}</h3>
        <button class="calidad" >HD</button>
    </div>
    <div class="cont-info">
        <button class="btnsPeli"><img src="./assets/logoReproducir.png" alt="">    Reproducir</button>
        <button class="btnsPeli btnDescargar"><img  src="./assets/logoDescargar.png" alt="" height="50%"></button>
    </div>  
    <div class="resum">
        <p>${resumen}</p>
        <h5>Elenco. ${elenco}</h5>
        <h5>Dirigido por:${direccion}</h5>
    </div>
    <div class="btnsGustos">
        <button class="btnPersonalizacion"><img src="./assets/logoMas.png" alt=""><br>Mi lista</button>
        <button class="btnPersonalizacion"><img src="./assets/logoCalificar.png" alt=""><br>Compartir</button>
        <button class="btnPersonalizacion"><img src="./assets/logoCompartir.png" alt=""><br>Calificar</button>
    </div> 
        `
    });   
    
    
