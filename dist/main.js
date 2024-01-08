const weatherModule = new WeatherModule();
const renderer = new Renderer();

const searchInput = $('#search-input');


async function initCitiesList(){
    const cities = await weatherModule.getAll();
    renderer.render(cities);
}

initCitiesList();

async function search(){
    const term = searchInput.val();
    if(term){
        const weatherList = await weatherModule.search(term);
        console.log(weatherList);
    }else{
        alert("the search input is empty");
    }
}