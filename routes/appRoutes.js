const express = require('express')
const router = express.Router()
const starWarsRoutes = require('./starWarsRoutes')
const rickNdMortyRoutes = require('./rickNdMortyRoutes')
const usersRoutes = require('./usersRoutes')

router.use('/starwars', starWarsRoutes)
router.use('/rickndmorty', rickNdMortyRoutes)
router.use('/users', usersRoutes)


module.exports = router