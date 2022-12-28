const express = require('express')
const app = express();

app.get('/',(req,res)=>{

    throw new Error('错啦错啦')

})



app.use((err,req,res,next)=>{          //错误中间件 要放在 所有的 路由之后
 
    console.log('发生错误:'+ err.message);
    res.send('Error'+err.message)
})

app.listen(80,()=>{
    console.log('server on ---------------------------------!!!!!');
})