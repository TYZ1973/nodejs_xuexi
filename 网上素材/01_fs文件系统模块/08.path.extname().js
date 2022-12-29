const path =require('path')

// 文件的存放路径
const fpath='/a/b/c/index.html'

/*
    path.extname():获取路径中的扩展名部分
*/
const fext=path.extname(fpath)
console.log(fext); // .html