// 导入mysql模块
const mysql=require('mysql')

// 2.建立与mysql数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1', //数据库ip地址
    user:'root',  //登录数据库的账号
    password:'123456', //登录数据库的密码 
    database:'nodejs_study'  //指定要操作的哪个数据库
})

// 暴露数据库连接对象db
module.exports=db