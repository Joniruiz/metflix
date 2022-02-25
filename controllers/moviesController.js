const {Movie,Genre} = require('../database/models');

module.exports ={
    test : (req,res) => {
        Movie.findAll().then(response =>{res.send(response)})
    }
}