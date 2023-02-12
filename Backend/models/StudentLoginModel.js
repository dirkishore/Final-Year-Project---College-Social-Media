const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentAuthDetailsShema = new Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const studentLoginDetails = mongoose.model('studentLoginDetails', studentAuthDetailsShema)
module.exports = studentLoginDetails