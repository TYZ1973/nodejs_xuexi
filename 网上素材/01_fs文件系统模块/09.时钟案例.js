// 1.1导入fs模块
const fs=require('fs')
// 1.2导入path模块
const path=require('path')

// 1.3定义正则表达式，分别匹配<style></style>和<script></script>标签
// \s:匹配空白字符；\S:匹配任意非空白字符; *:代表匹配多次
const regStyle=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/

// 2.1调用fs.readFile()读取文件
fs.readFile(path.join(__dirname,'./clock/index1.html'),'utf-8',function(err,dataStr){
    if(err){
        // 2.2读取html文件失败
        return console.log('读取失败'+err.message);
    }
    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出js，css，html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
    
})

// 3.1 定义处理css样式的方法
function resolveCSS(htmlStr){
    // 3.2 使用正则提取需要的内容
    /*
        exec()：用于检索字符串中的正则表达式的匹配
            语法：RegExpObject.exec(string)
                参数string：需要匹配的字符串 
            返回值：返回一个数组，其中存放匹配的结果，如果未找到匹配，则返回值为null
    */
    const r1=regStyle.exec(htmlStr)
    
    // 3.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS=r1[0].replace('<style>','').replace('</style>','')
    
    // 3.4调用fs.writeFile()方法，将提取的样式，写入到clock目录中，index.css的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err){
            return console.log('写入css样式失败'+err.message);
        }
        console.log('写入样式文件成功');
    })

}

// 4.1 定义处理js脚本的方法
function resolveJS(htmlStr){
    // 4.2 通过正则，提取对应的<script></script>标签内容
    const r2=regScript.exec(htmlStr)
    // 4.3 将提取出来的内容，做进一步的处理
    const newJS=r2[0].replace('<script>','').replace('</script>','')
    // 4.4 将处理的结果，写入到clock目录中的index.js
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err){
           return console.log('写入js样式失败'+err.message); 
        }
        console.log('写入样式文件成功');
    })
}

// 5.1 处理htnl结构的方法
function resolveHTML(htmlStr){
    // 5.2 将字符串调用replace方法，将内嵌的style和script标签，替换为外联的link和script标签
    const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    // 5.3 写入index.html文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('写入html文件失败'+err.message);
        }
        console.log('写入html页面成功');
    })
}

