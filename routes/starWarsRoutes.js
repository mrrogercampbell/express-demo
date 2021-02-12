const express = require('express')
const router = express.Router()
const starWaresControllers = require('../controllers/starWarsControllers')

router.get('/', starWaresControllers.allData)
// router.post('/', starWaresControllers.allData)

module.exports = router