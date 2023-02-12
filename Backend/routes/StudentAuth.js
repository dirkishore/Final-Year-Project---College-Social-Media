const express = require('express')
const router = express.Router()

const { RegisterStudent, LoginAuth } = require('../controllers/studentAuth')

router.post('/AddStudent', RegisterStudent)
router.post('/GetStudent', LoginAuth)


module.exports = router 