const weatherApi = new WeatherApi()

class WeatherModule{
    #citiesList;

    constructor(){
        this.#citiesList = []
    }

    get citiesList(){
        return this.#citiesList;
    }

    set citiesList(value){
        this.#citiesList = value;
    }


    async search(term){
            try{
                const result = await weatherApi.searchCity(term)
                const mappedResult = WeatherModel.fromSearch(result)
                this.#citiesList = [...this.#citiesList,mappedResult]
                return this.#citiesList
            }catch(e){
                console.error(e);
            }
    }

    async getAll(){
        try{
            const results = await weatherApi.getAll();
            const mappedResults = results.map(item => WeatherModel.fromApi(item))
            this.#citiesList = mappedResults
            return mappedResults
        }catch(e){
            console.error(e);
        }
    }

    async addCity(city){
        try{
            const results = await weatherApi.addCity(city)
            const idx = this.#citiesList.findIndex(cty => cty.name === city.name);
            this.#citiesList.splice(idx,1,WeatherModel.fromApi(results))
            return this.#citiesList
        }catch(e){
            console.error(e);
        }
    }

    async removeCity(id){
        try{
            const result = await weatherApi.deleteCity(id)
            const idx = this.#citiesList.findIndex(cty => cty._id === id);
            this.#citiesList.splice(idx,1,WeatherModel.fromSearch(result))
            return this.#citiesList
        }catch(e){
            console.error(e);
        }
    }

    getCityById(id){
            const city = this.#citiesList.find(cty => cty._id === id);
            return city
    }


    
}