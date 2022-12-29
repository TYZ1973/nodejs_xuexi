const express=require('express')
const app=express()

// 定义路由
app.get('/',(req,res)=>{
    // 人为制造错误
    throw new Error('人为制造错误')
    res.send('homepage')
})

// 错误级别中间件放在所有路由之后 
// 定义错误级别中间件，捕获整个项目的异常错误，防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res.send('error:'+err.message)
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})