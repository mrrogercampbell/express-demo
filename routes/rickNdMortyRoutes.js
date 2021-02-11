const express = require('express')
const router = express.Router()
const rickAndMortyData = require('../data/rickAndMortyData.json')

router.get('/', (req, res) => {
    res.json(rickAndMortyData)
})

module.exports = router