const express = require('express');
const app = express();
//调用 express  &  创建服务器


app.use((req,res,next)=>{
    console.log('简单版');
    next();
});
//创建简单中间件 middlewave  
app.get('/',(req,res)=>{
    res.send('home');
})

app.get('/user',(req,res)=>{
    res.send('userpage')
})
//主路径 和 user 路径的 get 方法
app.listen(80,()=>{
    console.log('http://127.0.0.1');
});
//启动服务器