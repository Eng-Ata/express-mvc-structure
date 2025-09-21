const {users} = require('../models/user')


function getusers(req,res){
    res.status(200).send(users)
}

module.exports = {getusers}