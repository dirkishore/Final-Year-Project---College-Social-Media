const express = require('express')
const router = express.Router()

const { AddStudentDetails } = require('../controllers/StudentDetailsController')
const { getStudentDetails } = require('../controllers/GetStudentDetails')

router.post('/addStudentDetails', AddStudentDetails)

router.post('/getStudentDetails', getStudentDetails)

module.exports = router