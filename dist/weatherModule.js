const weatherApi = new WeatherApi()

class WeatherModule{


    #weatherList;

    constructor(){

    }

    get weatherList(){
        return this.#weatherList;
    }

    set weatherList(value){
        this.#weatherList = value;
    }


    async search(tearm){
      
            try{
                
                const results = await weatherApi.searchWeather(tearm)
                return results
            }catch(e){
                console.error(e);
            }
        
        
    }
}