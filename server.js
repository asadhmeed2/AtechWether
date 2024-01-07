// Node Modules Imports
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

// Internal Modules Imports
const wheatherApi = require('./routes/wheatherApi')

mongoose.connect("mongodb://127.0.0.1:27017/wheatherApp", {})
.catch((err)=> console.log(err))




const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/weathers', wheatherApi)

// Running the server
const port = 3001
app.listen(port, function () { console.log('Running on ' + port) })