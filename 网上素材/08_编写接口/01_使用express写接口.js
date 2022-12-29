// 导入express
const express=require('express')
// 创建服务实例
const app=express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extends:false}))

// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题
const cors=require('cors')
app.use(cors)

// 导入路由模块
const router=require('./02_apiRouter')
// 把路由模块,注册到app上
app.use('/api',router)

// 启动服务器
app.listen(8080,()=>{
    console.log('Express server running st http://127.0.0.1:8080');
})