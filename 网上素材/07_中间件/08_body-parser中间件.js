const express=require('express')
const app=express()

// 导入解析表单数据的中间件 body-paraser
const paraser=require('body-parser')
// 使用app.use()注册中间件
app.use(paraser.urlencoded({extended:false}))
// 内置中间件
// app.use(express.urlencoded({extended:false}))

app.get('/user',(req,res)=>{
    // 如果没有配置任何解析表单数据的中间件，则req.body默认为undefined
    console.log(req.body);
    res.send('book')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})