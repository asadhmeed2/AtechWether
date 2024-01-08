const { WEATHER_EXTERNAL_API: WEATHER_EXTERNAL_API , WEATHER_API_KEY, WEATHER_UNITS} = require('../config/config')

const axios = require('axios');

const { ExtWeatherApiError } = require('../customErrors/customErrors');

class WheatherExternalAPI {


    async getWeatherByCity(city){
        const apiUrl = `${WEATHER_EXTERNAL_API}?q=${city}&appid=${WEATHER_API_KEY}&units=${WEATHER_UNITS}`
        try{
            const weathers = await axios.get(apiUrl);
            return weathers.data
        }catch(error){
            console.log(error);
            throw new ExtWeatherApiError()
        }
    }

}


const wheatherExternalApi = new WheatherExternalAPI();

module.exports = wheatherExternalApi;