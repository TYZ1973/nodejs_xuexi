const express=require('express')
const app=express()

// 1.定义局部中间件函数
const mw1=(req,res, next)=>{
    console.log('调用了局部生效中间件');
    next()
}

// 2.创建路由
// mw1只在第一个app.get()中生效
app.get('/',mw1,(req,res)=>{
    res.send('home page')
})

app.get('/user',(req,res)=>{
    res.send('user page')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})