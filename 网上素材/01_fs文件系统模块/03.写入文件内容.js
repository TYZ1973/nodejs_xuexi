// 1.导入fs文件系统模块
const fs=require('fs')

/* 
    2.调用fs.writeFile(path,data[,options],callback(err))方法，写入文件内容
        参数1：表示文件的存放路径
        参数2：表示要写入的内容
        参数3：编码格式(一般不写)
        参数4：回调函数

*/
fs.writeFile('./files/2.txt','abcd',function(err){
    /* 
        如果文件写入成功，err的值为null
        如果文件写入失败，err的值为错误对象
    */
    console.log(err);

    // 判断文件是否写入成功
    if(err){
        return console.log('文件写入失败'+err.message);
    }
    console.log('文件写入成功');
})