const express = require("express");
const app=express()
// 1.导入自己封装的中间件模块
const customBodyParser=require('./10_拆分自定义中间件')
// 2.将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.get('/',(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log('Express server running st http://127.0.0.1:8080');
})