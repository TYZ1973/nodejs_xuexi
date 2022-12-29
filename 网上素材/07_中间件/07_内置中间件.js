const express=require('express')
const app=express()
/**
 * 除了错误级别的中间件，其它中间件必须在路由之前进行配置
 */
// 通过express.json()这个中间件，解析json格式的请求数据
app.use(express.json())
// 通过express.urlencoded({extended:false})这个中间件，来解析表单中url-encoded格式的数据
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    // 在服务器可以使用req.body这个属性，接收客户端发送过来的请求数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
    res.send('ok')
})

app.get('/book',(req,res)=>{
    // 在服务器端可以获取req.body获取json格式的表单数据和url-encoded格式的数据
    console.log(req.body);
    res.send('book')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})