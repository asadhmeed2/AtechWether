const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wetherSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Wether = mongoose.model("wether", wetherSchema)
module.exports = Wether