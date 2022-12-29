// 1.导入fs模块
const fs= require('fs')

/*
    2.调用fs.readFile(path[,options],callback(err,dataStr))
        参数1：读取文件的存放路径
        参数2：读取文件时采用的编码格式，一般默认指定utf-8
        参数3：回调函数，拿到读取失败和成功的结果 err：失败，dataStr：成功
*/
fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
    /* 
        打印失败的结果
            如果读取成功，则err的值为null
            如果读取失败，则err的值为错误对象，dataStr的值为undefined
    */
    console.log(err);
    console.log('----');
    /*
        打印成功的结果
    */
    console.log(dataStr);
})