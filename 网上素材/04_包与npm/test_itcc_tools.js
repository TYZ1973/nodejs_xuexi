const itcc=require('../itcc-tools/index')

// 测试格式化时间的功能

const dtStr=itcc.dateFormat(new Date())
console.log(dtStr);


// 测试转义html方法
const htmlStr='<h1 title="abc">这是h1标签<span>123&nbsp</span></h1>'
const str=itcc.htmlEscape(htmlStr)
console.log(str);


// 测试还原html的方法
const  str2 = itcc.htmlUnEscape(str)
console.log(str2);