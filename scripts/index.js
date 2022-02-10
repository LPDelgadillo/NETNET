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