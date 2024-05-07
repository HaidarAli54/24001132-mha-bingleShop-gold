const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/ping',(req,res)=>{
    try {
        res.status(200).json({
            massage: 'Selamat datang di Bingle Shop'
        })
        console.log('HALLO')
        
        return
    }
    catch{
        res.status(500).json({
            massage: 'Server Sibuk'
        })
    }
})

app.listen(port,()=>{
    console.log(`sedang berjalan di ${port}`)
})

