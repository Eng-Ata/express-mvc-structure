const express = require("express");
const userRoute = express.Router();
const {getusers} = require('../controllers/user')

userRoute.get('/allusers', getusers )

module.exports = userRoute
