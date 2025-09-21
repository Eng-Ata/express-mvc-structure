const express = require("express");
const productRoute = express.Router();
const {getproducts} = require('../controllers/product')

productRoute.get('/allProducts', getproducts)

module.exports = {productRoute}