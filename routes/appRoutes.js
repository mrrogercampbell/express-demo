const express = require('express')
const router = express.Router()
const starWarsRoutes = require('./starWarsRoutes')
const rickNdMortyRoutes = require('./rickNdMortyRoutes')

// router.use('/starwars', starWarsRoutes)
router.use('/rickndmorty', rickNdMortyRoutes)


module.exports = router