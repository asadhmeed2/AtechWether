class WheatherModel {

    #inDB
    #name;
    #temperature;
    #contition;
    #conditionPic;

    constructor({name, temperature, contition, conditionPic},inDB=false){
        this.#conditionPic = conditionPic;
        this.name = name;
        this.#contition = contition;
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

    get contition(){
        return this.#contition
    }

    set contition(value){
        this.#contition = value;
    }

    get conditionPic(){
        return this.#conditionPic
    }

    set conditionPic(value){
        this.#conditionPic = value;
    }

    static fromApi(wheather){
        return new WheatherModel(wheather,true)
    }

    static fromSearch(wheather){
        return new WheatherModel(wheather,false)
    }
}