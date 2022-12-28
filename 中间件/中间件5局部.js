const express = require('express');
const app = express();

const mw1 = function(req,res,next){   // 不用 app.use 定义的中间件
    console.log('局部生效的中间件');
    next();
}

app.get('/', mw1, function(req,res){  //mw1  局部中间件
    res.send('home page')  //向客户端 发送数据
})

app.get('/user',function(req,res){
    res.send('user page');
})

app.listen(80,()=>{
    console.log('server on http://127.0.0.1');
})