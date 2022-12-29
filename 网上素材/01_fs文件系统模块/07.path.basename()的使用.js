const path=require('path')

// 定义文件的存放路径
const fpath='a/b/c/index.html'

/*
    path.basename(path[,ext])
        path:表示一个路径的字符串
        ext:表示文件扩展名
        返回：路径的最后一部分
*/
const fullName=path.basename(fpath)
console.log(fullName);//index.html

const nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt);//index