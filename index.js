const express = require('express')
const userRoute = require('./routes/user') 
const {productRoute} = require('./routes/product') 
const app = express() 

app.use(express.json())

app.use('/users',  userRoute)

app.use('/products', productRoute )
app.listen(3000,()=>
console.log('server run')

)
