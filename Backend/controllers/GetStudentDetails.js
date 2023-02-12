const StudentDetails = require('../models/StudentDetailsModel')


let getStudentDetails = (req, res, next) => {
    let Email = req.body.Email
    StudentDetails.findOne({ Email }).then((result) => res.json({ result: result }))
}

module.exports = { getStudentDetails }