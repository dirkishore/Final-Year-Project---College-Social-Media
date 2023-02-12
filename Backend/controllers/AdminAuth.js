const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const RegisterAdmin = (req, res, next) => {
    bcrypt.hash(req.body.AdminPassword, 10, (err, hashedPass) => {

        if (err) throw err;

        let admin = new Admin({
            AdminUserName: req.body.AdminUserName,
            AdminPassword: hashedPass
        }).save().then(() => res.json({ message: "Admin Added successfullty" })).catch((err) => console.log(err))
    })
}

const AdminLoginAuth = (req, res, next) => {
    var UserName = req.body.AdminUserName
    var Password = req.body.AdminPassword

    Admin.findOne({ UserName }).then(user => {
        if (user) {
            bcrypt.compare(Password, user.AdminPassword, (err, result) => {
                if (err) console.log(err);
                if (result) {
                    let token = jwt.sign({ UserName: user.AdminUserName }, 'secretValue', { expiresIn: '1h' })
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

module.exports = { RegisterAdmin, AdminLoginAuth }