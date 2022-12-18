//1.导入 fs 模块，来操作文件
const fs = require('fs')
//2.调用 fs.readFile() 方法读取文件
//  参数 1 读取文件路径
//  参数 2 读取文件时候采用的编码  比如 utf-8
//  参数 3 回调函数，比如 读取失败 err 读取成功 dataStr
// 读取成功 err 为 null    ， 读取失败 err 的值就是 错误对象，datastr 就是undifined

fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
    if(err){
       return console.log('读取文件失败' + err.message);
    }
console.log('读取成功:'+dataStr);
})

//修改一下 1.txt 的名字 变成不存在的文件 返回结果
//读取文件失败ENOENT: no such file or directory, open 'C:\Users\zangt\Desktop\自学一些东西\nodejs\files\111.txt'