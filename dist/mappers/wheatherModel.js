class WeatherModel {

    #inDB
    #name;
    #temperature;
    #condition;
    #conditionPic;

    constructor({name, temperature, condition, conditionPic},inDB=false){
        this.#conditionPic = conditionPic;
        this.name = name;
        this.#condition = condition;
        this.#temperature= temperature;
        this.#inDB = inDB;
    }

    get inDB(){
        return this.#inDB
    }

    set inDB(value){
        this.#inDB = value;
    }
    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value;
    }

    get temperature(){
        return this.#temperature
    }

    set temperature(value){
        this.#temperature = value;
    }

    get condition(){
        return this.#condition
    }

    set condition(value){
        this.#condition = value;
    }

    get conditionPic(){
        return this.#conditionPic
    }

    set conditionPic(value){
        this.#conditionPic = value;
    }

    static fromApi(weather){
        return {...weather, inDB:true}
        // return new WeatherModel(weather,true)
    }

    static fromSearch(weather){
        return {...weather, inDB:false}
        // return new WeatherModel(weather,false)
    }
}