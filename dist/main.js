const weatherModule = new WeatherModule();

const searchInput = $('#search-input');


async function search(){
    const tearm = searchInput.val();
    if(tearm){
        const weatherList = await weatherModule.search(tearm);
        console.log(weatherList);
    }else{
        alert("the search input is empty");
    }
}