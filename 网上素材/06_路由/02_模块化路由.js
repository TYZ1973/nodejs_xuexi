const express=require('express')
const app=express()

// 1.导入路由模块
const router=require('./03_router.js')
// 2.注册路由模块 app.use()函数用来注册全局中间件
app.use('/api',router)

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})