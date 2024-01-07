const express = require('express')
const router = express.Router()

const wheatherApiModule = require('../externalAPI/extWhetherAPI')

const Wether = require('../models/Wether')
const { ExtWeatherApiError } = require('../customErrors/customErrors')

router.get('/', function (req, res) {
    Wether.find({}).then( function (wheathers) {
        res.send(wheathers)
    })
})

router.get('/search', async function (req, res) {
    const areaName = req.query.area;

    try{
        const result = await wheatherApiModule.getWheatherByCity(areaName);

        return  res.status(200).json(result)
    }catch(err){
        return res.status(500).json({message: err.message})
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

router.put('/:id', function (req, res) {
    const wetherId = req.params.id;
    const wether = req.body
    
        Wether.findByIdAndUpdate(wetherId,wether,{new:true}).then( function (data){
            console.log(data);
            res.status(201).json(data)
        }).catch(error=>{
            console.error(error);
        })
    
})

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