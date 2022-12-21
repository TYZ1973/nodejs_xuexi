const http = require('http');
const fs = require('fs');
const path = require('path');
//创建web服务器
const server = http.createServer();
// 监听web服务器的request 事件
server.on('request',function(req,res){
    const url = req.url;
    //获得客户端请求的url地址    就是用户在网页上输入的网址
    // 文件储存位置在:
    // ./clock/index.css   / js  / html 
    let fpath='';
    if(url === '/'){
    res.setHeader('Content-Type','text/html; charset=utf8');
    fpath = path.join(__dirname,'/clock/index.html');
    console.log(__dirname);
    }else{
        fpath = path.join(__dirname,'./clock',url)
    }
    fs.readFile(fpath,'utf8',function(err,dataStr){
        if(err){
            return res.end('404 not found');
        }else{
         res.end(dataStr);
    }
    })
})

server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})