const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('hello word')
})

app.post('/',(req,res)=>{
    res.send('Post request')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})