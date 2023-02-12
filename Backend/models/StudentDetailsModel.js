const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentDetailsSchema = new Schema({
    Profile: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    Rollno: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        require: true
    },
    PhoneNo: {
        type: Number,
        required: true
    },
    Degree: {
        type: String,
        require: true
    },
    Branch: {
        type: String,
        require: true
    },
    Year: {
        type: String,
        require: true
    }

})

const StudentDetails = mongoose.model("studentsDetails", StudentDetailsSchema)
module.exports = StudentDetails