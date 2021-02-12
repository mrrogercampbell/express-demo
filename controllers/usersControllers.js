const usersData = require('../data/usersData.json')

module.exports = {
    allData: (req, res) => res.json(usersData),
    create: (req, res) => {
        console.log(req.body)
        let newRecord = req.body
        usersData.push(newRecord)
        res.send('Your New record has been added')
    }
}