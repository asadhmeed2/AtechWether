const weatherModule = new WeatherModule();
const renderer = new Renderer();

const searchInput = $('#search-input');
const citiesContainer = $('.cities-container');


async function initCitiesList(){
    const cities = await weatherModule.getAll();
    renderer.render(cities);
}

initCitiesList();

async function search(){
    const term = searchInput.val();
    if(term){
        const citiesList = await weatherModule.search(term);
        renderer.render(citiesList);
    }else{
        alert("the search input is empty");
    }
}

citiesContainer.on('click','.gg-add',async function(){
    const card = $($(this).closest('.weather-card')[0])
    const name = card.find('.name').data().name
    const temperature = card.find('.temperature').data().temp
    const condition = card.find('.weather-condition').data().condition
    const conditionPic = card.find('.weather-condition-pic').data().conpic

    const cities = await weatherModule.addCity({name,temperature,condition,conditionPic});

    renderer.render(cities);
})

citiesContainer.on('click','.gg-remove',async function(){
    const id = $(this).closest('.weather-card')[0].id
    const cities = await weatherModule.removeCity(id);
    renderer.render(cities);
})

