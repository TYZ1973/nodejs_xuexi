const express=require('express')

const app=express()

// 在这里，调用express.static(文件夹路径)方法,快速的对外提供静态资源
app.use('/abcd',express.static('./files'))
app.use(express.static('./clock'))

app.listen(8080,()=>{
    console.log('express server running at http://127.0.0.1:8080');
})