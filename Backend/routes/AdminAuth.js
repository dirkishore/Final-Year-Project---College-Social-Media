const express = require('express')
const router = express.Router()

const { RegisterAdmin, AdminLoginAuth } = require('../controllers/AdminAuth')

router.post('/AddAdmin', RegisterAdmin)
router.post('/GetAdmin', AdminLoginAuth)


module.exports = router 