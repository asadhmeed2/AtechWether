class WeatherApi{

    async searchWeather(searchTearm){
        const result =  $.ajax({
            type: 'GET',
            url:`${SERVER_API_WEATHER_ENDPOINT}/search`,
            data: {area:searchTearm}
        })
        return result
    }

    async addWeather(weather){
        const result = await $.ajax({
            type: 'POST',
            url:`${SERVER_API_WEATHER_ENDPOINT}/`,
            data: weather
        })

        return result
    }

    async deleteWeather(id){
        const result = await $.ajax({
            type: 'DELETE',
            url:`${SERVER_API_WEATHER_ENDPOINT}/${id}`,
        })

        return result
    }
}