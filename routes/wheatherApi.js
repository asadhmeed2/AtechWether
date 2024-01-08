const express = require('express')
const router = express.Router()

const weatherApiModule = require('../externalAPI/extWhetherAPI')

const Wether = require('../models/Wether')
const MappingModule = require('../mappingModule/mappingModule')

router.get('/', function (req, res) {
    Wether.find({}).then( function (weathers) {
        res.send(weathers)
    })
})

router.get('/search', async function (req, res) {
    const areaName = req.query.area;

    try{
        const result = await weatherApiModule.getWeatherByCity(areaName);

        const mappedResult = MappingModule.mapWeatherApiResult(result)

        return  res.status(200).send(mappedResult)
    }catch(err){
        console.log(err);
        return res.status(500).send({message: err.message})
    }
})

router.post('/', function (req, res) {
    const wether = req.body
    try{
        Wether.create(wether).then( function (data){
            console.log(data);
            res.status(201).json(data)
        })
    }catch(error){
        console.error(error);
    }
})

// cityName 
router.delete ('/:id', function (req, res) {
    const wetherId = req.params.id;
    
        Wether.findByIdAndDelete(wetherId).then( function (data){
            console.log(data);
            res.status(201).json(data)
        }).catch(error=>{
            console.error(error);
            res.status(404).send({message: error.message});
        })
    
})



module.exports = router