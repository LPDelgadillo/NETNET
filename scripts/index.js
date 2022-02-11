let videos;
const contVideos = document.getElementById("populares");

async function getVideos(){
    try{
        const resp = await fetch('http://localhost:4000/videos');
        const data = await resp.json()
        videos = data;
        pintarVideos(videos)
    }catch(error){
        console.log(error);
    }
}
getVideos()

function pintarVideos(videos){
    videos.forEach((video) => {
        const{name, id, imagen} = video;

        contVideos.innerHTML +=`
            <img id="${id}" src="${imagen}" alt="${name}">
        `
    });
}

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

// //Buscar
// document.getElementById('btnBusqueda').addEventListener('click', buscar)

// async function buscar(){
//     const input = document.getElementById('busqueda').value;

//     const data = await getVideos();
//     const result = data.filter((video)=> video.name.toLowerCase().includes(input.toLowerCase()))
    
//     pintarVideos(result)
// }

// // Ver Videos
// async function verVideo(id){
//     const data = await getVideos();
//     const result = data.filter((video)=> video.id === id)
    
//     localStorage.setItem('video', JSON.stringify(result))

//     window.location.href = '../video.html'
// }