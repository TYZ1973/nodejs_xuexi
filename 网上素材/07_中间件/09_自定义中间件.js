const express = require("express");
const app=express()
// 导入内置的querystring模块
const qs=require('querystring')

// 解析表单数据的中间件
app.use((req,res,next)=>{
    // 1.定义str字符串，用来存储客户端发送过来的数据
    let str=''
    // 2.监听req的data事件
    req.on('data',(chunk)=>{
        str += chunk
    })

    // 3.监听req对象的end事件(请求体发送完毕后自动触发)
    req.on('end',()=>{
        // 在str中存放的是完整的请求体数据据
        // console.log(str);
        // 把字符串格式的请求体数据，解析成为对象格式
        const body=qs.parse(str)
        req.body=body
        next()
    })
})

app.get('/',(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log('Express server running st http://127.0.0.1:8080');
})