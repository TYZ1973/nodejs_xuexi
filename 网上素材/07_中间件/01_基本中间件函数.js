const express=require('express')
const app=express()

/*
// 定义一个最简单的中间件
const mw=function(req,res,next){
    console.log('这是最简单的中间件函数');
    // 把流转关系交给下一个中间件或路由
    next()
}

// 将mw注册为全局生效的中间件
app.use(mw)
*/

// 定义全局中间件的简化形式
app.use((req,res,next)=>{
    console.log('这是定义全局中间件的简化形式');
    next()
})

app.get('/',(req,res)=>{
    console.log('get');
    res.send('home page')
})

app.post('/',(req,res)=>{
    console.log('post');
    res.send('user page')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})