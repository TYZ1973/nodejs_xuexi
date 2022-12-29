// 1.导入fs模块
const fs=require('fs')

// 2.调用fs读取内容
fs.readFile('./files/成绩.txt','utf-8',function(err,dataStr){
    // 3.判断是否读成功
    if(err){
        return console.log('读取失败'+err.message);
    }
    // 4.1把成绩的数据按照空格进行分隔
    const arrOld=dataStr.split(' ')

    // 4.2循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew=[]
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    });

    // 4.3把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    
    // 5.调用fs写入方法
    fs.writeFile('./files/成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('写入成绩失败',err.message);
        }
        console.log('成绩写入成功');
    })
    
})