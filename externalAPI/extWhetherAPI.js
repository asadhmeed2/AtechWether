const { WHEATHER_EXTERNAL_API ,WHEATHER_API_KEY} = require('../config/config')

const axios = require('axios');

const { ExtWeatherApiError } = require('../customErrors/customErrors');

class WheatherExternalAPI {


    async getWheatherByCity(city){
        try{
            const wheathers = await axios.get(`${WHEATHER_EXTERNAL_API}?q=${city}&appid=${WHEATHER_API_KEY}`);
            return wheathers
        }catch(error){
            console.log(error);
            throw new ExtWeatherApiError()
        }
    }

}


const wheatherExternalApi = new WheatherExternalAPI();

module.exports = wheatherExternalApi;