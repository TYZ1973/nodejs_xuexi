const parser = require('body-parser');
const express = require('express')
const app = express();

app.use(parser())
// app.use(bodyParser.urlencoded({extented:false}))

app.post('/user',(req,res)=>{


    res.send(req.body)
})

app.listen(80,()=>{
    console.log('server on');
})