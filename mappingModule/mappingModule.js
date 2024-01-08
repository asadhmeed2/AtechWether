const FIRST_WEATHER_RESULT_IDX = 0;

class MappingModule {

    static mapWeatherApiResult(result) {
        const { weather, main ,name} = result;

        const {temp} = main

        const {icon , main:text } = weather[FIRST_WEATHER_RESULT_IDX];

        return {
            name,
            temperature: temp,
            condition: text,
            conditionPic: icon
        }
    }
}

module.exports = MappingModule