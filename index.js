const express = require('express')
const app = express()
const responseHandler = require('./handler/respon_handler')
const {ResponHandler, response} = require('./handler/respon_handler')

require('dotenv').config()

const port = process.env.PORT 

const resHandler = new ResponHandler()
app.get('/ping',resHandler.response)

app.listen(port,()=>{
    console.log(`sedang berjalan di ${port}`)
})
