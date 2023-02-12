const Student = require('../models/StudentLoginModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const RegisterStudent = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, (err, hashedPass) => {

        if (err) throw err;

        let student = new Student({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedPass
        })
        student.save().then(() => res.json({ message: "student Added successfullty" })).catch((err) => console.log(err))
    })
}

const LoginAuth = (req, res, next) => {
    var Email = req.body.Email
    var Password = req.body.Password

    Student.findOne({ Email }).then(user => {
        if (user) {
            bcrypt.compare(Password, user.Password, (err, result) => {
                if (err) console.log(err);
                if (result) {
                    let token = jwt.sign({ Email: user.Email }, 'secretValue', { expiresIn: '1h' })
                    res.json({
                        message: "Login Successfully",
                        token
                    })
                } else {
                    res.json({ message: "password doesn't match" })
                }
            })
        } else {
            res.json({ message: "User not found" })
        }
    })
}





module.exports = { RegisterStudent, LoginAuth }