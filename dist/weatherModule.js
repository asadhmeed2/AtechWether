const weatherApi = new WeatherApi()

class WeatherModule{
    #weatherList;

    constructor(){
        this.#weatherList = []
    }

    get weatherList(){
        return this.#weatherList;
    }

    set weatherList(value){
        this.#weatherList = value;
    }


    async search(term){
      
            try{
                
                const results = await weatherApi.searchCity(term)
                const mappedResults = results.map(item => WeatherModel.fromSearch(item))
                return mappedResults
            }catch(e){
                console.error(e);
            }
        
        
    }

    async getAll(){
        try{
            const results = await weatherApi.getAll();
            const mappedResults = results.map(item => WeatherModel.fromApi(item))
            return mappedResults
        }catch(e){
            console.error(e);
        }
    }

    async addCity(city){
        try{
            const results = await weatherApi.addCity(city)
            return results
        }catch(e){
            console.error(e);
        }
    }

    async removeCity(id){
        try{
            const results = await weatherApi.deleteCity(id)
            return results
        }catch(e){
            console.error(e);
        }
    }
}