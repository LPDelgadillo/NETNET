// let videos;
// const contVideos = document.getElementById("populares");

// async function getVideos(){
//     try{
//         const resp = await fetch('http://localhost:4000/videos');
//         const data = await resp.json()
//         return data
        // videos = data;
        // pintarVideos(videos)
//     }catch(error){
//         return console.log(error);
//     }
// }
// getVideos()

// async function pintarVideos(videos){
//     videos.forEach((video) => {
//         const{name, id, imagen} = video;

//         contVideos.innerHTML +=`
//             <img onclick="verVideo()" id="${id}" src="${imagen}" alt="${name}">
//         `
//     });
// }

// Botones de filtros
// const inicio = document.getElementById('btnTodos')
// const proximamente = document.getElementById('btnProximamente')
// const descargar = document.getElementById('btnDescargar')
// const diseño = document.getElementById('btnDise')

// inicio.addEventListener('click', ()=> {
//     pintarVideos()

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     inicio.classList.add('active')
// })

// proximamente.addEventListener('click', async ()=> {
//     const data = await getVideos()
//     const music = data.filter((video)=> video.categoria === "Proximamente")

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     proximo.classList.add('active')

//     pintarVideos(proximamente)
// })

// develop.addEventListener('click', async()=> {
//     const data = await getVideos()
//     const prog = data.filter((video)=> video.categorie === "develop")

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     develop.classList.add('active')

//     pintarVideos(prog)
// })

// diseño.addEventListener('click', async ()=> {
//     const data = await getVideos()
//     const design = data.filter((video)=> video.categorie === "movie")

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     diseño.classList.add('active')

//     pintarVideos(design)
// })

//Buscar
// document.getElementById('btnBusqueda').addEventListener('click', buscar)

// async function buscar(){
//     const input = document.getElementById('busqueda').value;

//     const data = await getVideos();
//     const result = data.filter((video)=> video.name.toLowerCase().includes(input.toLowerCase()))
    
//     pintarVideos(result)
// }

// Ver Videos
// async function verVideo(id){
//     const data = await getVideos();
//     const result = data.filter((video)=> video.id === id)
    
//     localStorage.setItem('video', JSON.stringify(result))

//     window.location.href = '../pelicula.html'
// }


const contVideos = document.getElementById('populares')

// Funcion de obtener datos
async function getVideos (){
    try {
        const resp = await fetch('http://localhost:4000/videos');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar videos
async function pintarVideos(data) {
    if(data == undefined){
        data = await getVideos()
    }

    contVideos.innerHTML = '';

    data.forEach((video)=> {
        const { id, name, imagen } = video;

        contVideos.innerHTML +=`
        <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
        `
    })
}

pintarVideos()

// Botones de filtros
// const todos = document.getElementById('btnTodos')
// const anime = document.getElementById('seriesAnime')
// const develop = document.getElementById('btnProg')
// const diseño = document.getElementById('btnDise')

// todos.addEventListener('click', ()=> {
//     pintarVideos()

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     todos.classList.add('active')
// })
// let anime= document.getElementById("")
// anime.addEventListener('click', async ()=> {

const segundaSeccion = document.getElementById("seriesAnime")
    // async function mostrarVideos(data) {
    //     if(data == undefined){
    //         data = await getVideos()
        // }
        async function filterAnimes(){
            const data = await getVideos()
            const music = data.filter((video)=> video.categoria === "Animes")
            console.log(music)
        
            filterAnimes(music)
            }


        seriesAnime.innerHTML = '';
    
        data.forEach((video)=> {
            const { id, name, imagen, categoria } = video;
            const filtro= video.filter()
            seriesAnime.innerHTML +=`
            <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
            `
        })
    
    
    mostrarVideos()




   
// })

// develop.addEventListener('click', async()=> {
//     const data = await getVideos()
//     const prog = data.filter((video)=> video.categorie === "develop")

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     develop.classList.add('active')

//     pintarVideos(prog)
// })

// diseño.addEventListener('click', async ()=> {
//     const data = await getVideos()
//     const design = data.filter((video)=> video.categorie === "movie")

//     const btn = document.querySelectorAll('.active')
//     btn[0].classList.remove('active')
//     diseño.classList.add('active')

//     pintarVideos(design)
// })

// Buscar responsive
// const ancho = screen.width;

//Buscar
// document.getElementById('btnBusqueda').addEventListener('click', buscar)
// const input = document.getElementById('busqueda');

// async function buscar(){
//     const input = document.getElementById('busqueda');
//     if (ancho <= 425) {
//         const header = document.getElementById('header')
//         const main = document.getElementById('main')
//         header.innerHTML = `
//         <div class='searchMovile'>
//         <a href="./index.html"><img class='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAI9JREFUSEvt1EsKwCAMBNDMSVtvZm/Sm6UIForYTj50p1tlnklEyM8LP+fLAmiHQy1S1SoiCqAwwQ308K0HV4a4gCG8GQeA/asKMxAJb7AJiIabgEw4BbLhEYC+mnHgdAaTKlwIBdqNMogJyCBmIIq4gAlSALR/6XW5gQdysnD6TNlPadkPVWAJvs8sgHbrAnTpRhk8QpSgAAAAAElFTkSuQmCC"/></a>
//             <input id="busqueda" onChange="busquedaMovil()" class='barMovile' type="text" placeholder="Buscar Video">
//         </div>
//         `;
//         contVideos.innerHTML = '';
//     }else{

//         const data = await getVideos();
//         const result = data.filter((video)=> video.name.toLowerCase().includes(input.value.toLowerCase()))
        
//         pintarVideos(result)
//     }
    
// }

// async function busquedaMovil(){
//     if (ancho <= 425) {
//         console.log('Hola')
//         const input = document.getElementById('busqueda').value;

//         const data = await getVideos();
//         const result = data.filter((video)=> video.name.toLowerCase().includes(input.toLowerCase()))
//         pintarVideos(result)
//     }
// }



// Ver Videos
async function verVideo(id){
    const data = await getVideos();
    const result = data.filter((video)=> video.id === id)
    
    localStorage.setItem('video', JSON.stringify(result))

    window.location.href = '../pelicula.html'
}