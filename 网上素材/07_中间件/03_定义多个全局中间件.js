const express=require('express')
const app=express()

// 定义第一个全局中间件
app.use((res,req,next)=>{
    console.log('调用了第一个全局中间件');
    next()
})


// 定义第二个全局中间件
app.use((res,req,next)=>{
    console.log('调用了第二个全局中间件');
    next()
})

app.get('/',(req,res)=>{
    res.send('User page')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})