const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wetherSchema = new Schema({
    name: String,
    temperature: Number,
    condition:String,
    conditionPic:String,
})

const Wether = mongoose.model("wether", wetherSchema)
module.exports = Wether