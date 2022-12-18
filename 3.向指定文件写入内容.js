const fs= require("fs")
//调用 fs.writeFile()方法 写入内容
//  参数1  路径
//  参数2  要写入的内容
//  参数3  回调函数 

fs.writeFile('files/2.txt','写入2.txt',function(err){
    // 如果写入成功  err 等于 null   也就是true
    // 如果写入失败   err 输出错误对象
    if(err){
        return console.log('写入失败：'+err.message);
    }
    console.log('成功');
})