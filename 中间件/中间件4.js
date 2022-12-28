const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('111111');
    next();
});

app.use((req,res,next)=>{
    console.log('2222222');
    next();
    
});
// 定义多个 全局中间件  只需要连续的使用 app.use 就行， 系统会按照顺序 执行

app.get('/user',(req,res)=>{
    res.send('user page.')

})

app.listen(80,()=>{
    console.log('sever on http://127.0.0.1');
})