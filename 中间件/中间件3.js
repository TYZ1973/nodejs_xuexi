//中间件 共享 res 和 req

const express = require('express');
const app = express();
//调用 express  &  创建服务器


app.use((req,res,next)=>{

    const time = Date.now();   
    req.startTime = time;    // 中间件 共享 req 和 res

    console.log('简单版');
    next();
});
//创建简单中间件 middlewave  
app.get('/',(req,res)=>{
    res.send('home'+ req.startTime);
})

app.get('/user',(req,res)=>{
    res.send('userpage'+ req.startTime)
})
//主路径 和 user 路径的 get 方法
app.listen(80,()=>{
    console.log('http://127.0.0.1');
});
//启动服务器