const StudentDetails = require('../models/StudentDetailsModel')

const AddStudentDetails = (req, res, next) => {
    let studentDetail = new StudentDetails({
        Profile: req.body.profile,
        Email: req.body.Email,
        Rollno: req.body.Rollno,
        Name: req.body.Name,
        PhoneNo: req.body.PhoneNo,
        Degree: req.body.Degree,
        Branch: req.body.Branch,
        Year: req.body.year
    })
    studentDetail.save().then(() => res.json({ message: "details Added successfully" }))
        .catch((err) => { res.json({ message: err }) })
}

module.exports = { AddStudentDetails }