const express=require('express')
const app=express()

// 定义全局中间件的简化形式
app.use((req,res,next)=>{
    // 获取请求到达服务器的事时间
    const time=Date.now()
    // 为req对象，挂在自定义属性，从而把时间共享给所有路由
    req.startTime=time
    next()
})

app.get('/',(req,res)=>{
    res.send('home page'+req.startTime)
})

app.post('/',(req,res)=>{
    res.send('user page'+req.startTime)
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})