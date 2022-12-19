const http = require('http')
const server = http.createServer()

server.on('request',function(req,res){
    const url = req.url
    const method = req.method
    let content ='<h1>404 not found!</h1>'
    if(url === '/' || url === 'index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        content = '<h1>关于</h1>'
    }
    // const str = 'your request url is '+url+', and request method is '+method+'';
    // const str2='用setheader来解决中文乱码问题'+url+'21312131'

    res.setHeader('Content-Type','text/html; charset=utf8')
    // res.end(str);
    res.end(content)
    
})

server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})

