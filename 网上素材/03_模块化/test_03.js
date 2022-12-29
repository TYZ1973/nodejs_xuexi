/**
 * 在外界使用require导入一个自定义模块的时候，
 *      得到的成员就是module.exports所指的对象
 */
const m=require('./03_自定义模块')

console.log(m);