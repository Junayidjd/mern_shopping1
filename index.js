const express = require('express')
require('./config/config')
require('./Models/db.js')
const app = express()

  let data=[]
  let url='mongodb://localhost:27017'
  app.use(express.json())
  app.post('/',(req,res)=>{
    data.push(req.body);
    res.send(data)

  })

  mongo.connect(url,(R)=>{
    if(R) console.log("Connected")
  })
  app.use.json()
  app.listen(3000)
  


