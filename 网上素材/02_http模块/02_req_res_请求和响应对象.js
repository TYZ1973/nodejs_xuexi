// 1. 导入http模块
const http=require('http')

// 2. 创建web服务器实例
const server=http.createServer()

// 3. 为服务器实例绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
   // req.url 是客户端请求的URL地址
   const url = req.url
   // req.method 是客户端请求的method类型
   const method=req.method
   const str=`Your request url is ${url} and request methos is ${method}`
   console.log(str);

   // 调用res.end()方法，向客户端响应一些内容
   res.end(str)
})

// 5. 启动服务器
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})