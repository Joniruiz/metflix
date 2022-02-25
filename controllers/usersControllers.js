const bcrypt = require('bcrypt');
const {User} = require('../database/models')

module.exports = {
    test: (req,res) => {
        User.findAll().then(response => {res.send(response)})
    },
    
}