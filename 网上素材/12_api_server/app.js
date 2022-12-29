// 1.导入express
const express=require('express')
// 2.创建express服务器实例对象
const app=express()
// 8.导入定义验证规则的包
// const joi=require('@hapi/joi')
const joi=require('joi')

// 4.导入并配置cors中间件,解决接口跨域问题
const cors=require('cors')
app.use(cors())

// 5.配置解析表单数据的中间件,注意：这个中间件只能解析 application/x-www-form-urlencoded这种格式的表单数据中间件
app.use(express.urlencoded({extended:false}))
// 7.在路由之前封装res.cc()函数,定义中间件
app.use((req,res,next)=>{
    // status 默认值为1，表示失败的情况
    // err的值可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message:err
        })
    }
    next()
})

// 10.一定要在路由之前配置解析token的中间件
const expressJWT=require('express-jwt')
const config=require('./config')
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))

// 6.导入并使用用户模块
const userRouter=require('./router/user')
app.use('/api',userRouter)

// 12.导入并使用用户信息的模块
const userinfoRouter=require('./router/userinfo')
app.use('/my',userinfoRouter)

// 13.导入并使用文章分类的路由模块
const artCateRouter=require('./router/artcate')
app.use('/my/article',artCateRouter)

// 14.导入并使用文章的路由
const articleRouter =require('./router/article')
app.use('/my/article',articleRouter)

// 9.定义错误级别的中间件
app.use((err,req,res,next)=>{
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) {
       return res.cc(err)
    }
    // 11.捕获身份认证失败的结果
    if(err.name === 'UnauthorizedError'){
        return res.cc('身份认证失败')
    }
    // 未知的错误
    res.cc(err)
})

// 3.启动服务器
app.listen(3007,()=>{
    console.log('api server running at http://127.0.0.1:3007');
})