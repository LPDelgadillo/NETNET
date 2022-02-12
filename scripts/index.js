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

//-----------------------------------------------------------------------------------------//
const seriesAnime = document.getElementById('seriesAnime');


// Funcion mostrar videos
async function mostrarAnimes(data) {
    if(data == undefined){
        data = await getVideos()
    }

    seriesAnime.innerHTML = '';

    data.forEach((video)=> {
        const { id, name, imagen } = video;

        seriesAnime.innerHTML +=`
        <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
        `
    })
}

mostrarAnimes()

//--------------------------------------------------------------------------------------------------//
const seriesCrimenes = document.getElementById('seriesCrimenes');

async function mostrarCrimenes(categoria) {
    const data = await getVideos();
    const result = data.filter((crimen)=> crimen.categoria === Crimenes)

    seriesCrimenes.innerHTML = '';

    result.forEach((video)=> {
        const { id, name, imagen } = video;

        seriesCrimenes.innerHTML +=`
        <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
        `
    })
}

mostrarCrimenes()
//--------------------------------------------------------------------------------------------------------------//

// Ver Videos
async function verVideo(id){
    const data = await getVideos();
    const result = data.filter((video)=> video.id === id)
    
    localStorage.setItem('video', JSON.stringify(result))

    window.location.href = '../pelicula.html'
}