const fs = require('fs')

fs.readFile('./files/ok.txt','utf-8',function(err,dataStr){

    if(err){
        return console.log('读取失败：'+ err.message);
    }

    const arrOld =dataStr.split(' ')
    const arrNew =[]
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=',':'))
    })
    console.log(arrNew);
    const newStr = arrNew.join('\r\n')
    console.log(newStr);


fs.writeFile('./files/okgai.txt', newStr, function(err){
if(err){
    return console.log('失败'+ err.message);
}
console.log('写入成功');
})
})