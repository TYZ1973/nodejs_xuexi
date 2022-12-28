// express.static   托管静态资源的内置中间件

//express.json      解析json格式的请求体数据
// app.use(express.json())
// //express.urlencoded  解析 url-encoded格式的请求体数据
// app.use(express.urlencoded({extended:false}))

const express = require("express");


const app = express();

app.use(express.json())   //设置解析json中间件
app.use(express.urlencoded({extended:false}))  //设置解析 url encoded 格式中间件
app.post('/user',(req, res)=>{
    
    console.log(req.body);    // req.body 用来获得 json 和 url 解析出来的数据

    res.send('ok')
})

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('okk2')
})




app.listen(80,function(){
    console.log('Express server running at http://127.0.0.1');
})