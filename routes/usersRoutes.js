const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/usersControllers')

router.get('/', usersControllers.allData)
router.post('/', usersControllers.create)

module.exports = router