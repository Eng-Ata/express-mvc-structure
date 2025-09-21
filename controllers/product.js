const {productsList} = require('../models/product')

function getproducts(req,res){
    res.status(200).send(productsList)
}

module.exports = {getproducts}