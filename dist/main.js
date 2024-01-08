const weatherModule = new WeatherModule();
const renderrer = new Renderrer();

const searchInput = $('#search-input');


async function initCitiesList(){
    const cities = await weatherModule.getAll();
    renderrer.render(cities);
}

initCitiesList();

async function search(){
    const tearm = searchInput.val();
    if(tearm){
        const weatherList = await weatherModule.search(tearm);
        console.log(weatherList);
    }else{
        alert("the search input is empty");
    }
}