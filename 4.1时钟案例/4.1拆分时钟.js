const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

//定义正则表达式 regular expression   匹配 style 和 script 标签 
const regStyle = /<style>[\s\S]*<\/style>/  //[\s匹配空格]
const regScript = /<script>[\s\S]*<\/script>/

//调用 readFile方法
fs.readFile(path.join(__dirname,'./4.1时钟小案例.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取时钟小案例.html失败 : '+ err.message);
    }else{
        resolveCSS(dataStr)
        resolveJS(dataStr)
        resolveHTML(dataStr)
        //成功的话就调用自己写的方法 来拆分 html css js
    }

})

// 使用 exec()
// exec() 方法是一个正则表达式方法。

// exec() 方法用于检索字符串中的正则表达式的匹配。

// 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

// 以下实例用于搜索字符串中的字母 "e":

// 实例 1
// /e/.exec("The best things in life are free!");
// 字符串中含有 "e"，所以该实例输出为:

// e

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    const newCss =r1[0].replace('<style>','').replace('</style>','')
    //r1[0] 就是全部的style
    // console.log(r1[0].replace('<style>','111'));
    // console.log(r1[0].replace('</style>','222'));
    // console.log(r1[0].replace('<style>','').replace('</style>',''));
    // console.log(htmlStr);
    fs.writeFile(path.join(__dirname,'./index.css'),newCss,function(err){
        if(err){

            return console.log('写入css(index.css)失败！！！：',err.message);
        }
        
        console.log('写入index.css 成功');
    })
    
}

function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)
    const newJs =r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./index.js'),newJs,function(err){
        if(err){

            return console.log('写入js(index.js)失败！！！：',err.message);
        }
        
        console.log('写入index.js 成功');
    })
    
}
function resolveHTML(htmlStr){

    const newHtml = htmlStr
    .replace(regStyle,'<link rel="stylesheet" href="./index.css">')
    .replace(regScript,'<script src="index.js"></script>');
    fs.writeFile(path.join(__dirname,'./index.html'), newHtml , err3 =>{ //err3 =>{}  等价于 function(err3){}
        if(err3)
        return console.log('写入index.html失败:'+err3.message);
    })
    console.log("写入index.html成功!!");
}


    
    

