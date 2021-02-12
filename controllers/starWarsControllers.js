const starWarsData = require('../data/starWarsData.json')

module.exports = {
    allData: (req, res) => res.json(starWarsData),
}