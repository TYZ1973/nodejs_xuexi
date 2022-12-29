// 1. 导入需要的包
const moment=require('moment')

/**
 * moment():获取当前时间
 * format():格式化时间方法
 * 年：YYYY
 * 月：MM
 * 日:DD
 * 时：hh
 * 分：mm
 * 秒：ss
 * 一个h或m或s代表不补零
 */
const dt=moment().format('YYYY-MM-DD hh:mm:ss')
console.log(dt);