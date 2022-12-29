const path=require('path')
const fs=require('fs')

// 注意：../会抵消前面的路径
// const pathStr=path.join('/a','/b/c','../','./d','e')
// console.log(pathStr);

//
// fs.readFile(__dirname+'/files/1.txt','utf-8',function(err,dataStr){
//     if(err){
//         console.log('文件读取错误'+err.message);
//     }
//     console.log(dataStr);
// })


/*
    path.join()：可以把多个路径片段拼接为完整的路径字符串
*/
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',function(err,dataStr){
    if(err){
        console.log(err.message);
    }
    console.log(dataStr);
})
