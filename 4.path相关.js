// Path.join([...paths])

const path = require('path')

const pathStr = path.join('/a','/b/c','../','./d','e')  //  ../ 会抵消掉前面的一个路径  这里的/c 会被抵消，  输出结果\a\b\d\e
console.log(pathStr);

// const pathStr2 = path.join(__dirname,'./files/1.txt')
// console.log(pathStr2);

//-------------------

// path.basename(path[,ext])    
// path <string> 必选参数，表示路径的字符串
// ext <string> 可选，文件扩展名

// 返回值  <string> 路径的最后一部分

const fpath = '/a/b/c/index.html'
var fullName = path.basename(fpath)
console.log(fullName);     //输出结果   index.html    路径的最后一部分

const nameWithoutExt =path.basename(fpath,'.html')  //去掉返回结果中的某些字符 ， 写什么就去掉什么 输出剩下的
console.log(nameWithoutExt);     // 这里输出 index

const epath = path.extname(fpath)   // extname 是返回扩展名   这里就是 .html
console.log(epath);     // 这里输出 .html 


//此处知识点  path
// path.basename
// path.extname
// path.join