// 导入mysql模块
const mysql=require('mysql')

// 2.建立与mysql数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1', //数据库ip地址
    user:'root',  //登录数据库的账号
    password:'123456', //登录数据库的密码 
    database:'nodejs_study'  //指定要操作的哪个数据库
})

// 测试mysql模块能否正常工作

db.query('select 1',(err,results)=>{
    // mysql模块工作期间报错了
    if(err){
        return console.log(err.message);
    }
    console.log(results);
})


// 查询users表中所有的数据
/*
const sqlStr='select * from users'
db.query(sqlStr,(err,results)=>{
    // 查询数据失败
    if(err){
        return console.log(err.message);
    }

    // 查询数据成功，注意：如果执行的select查询语句，则执行的结果是数组
    console.log(results);
})
*/

// 向users表中插入数据
/*
const user={username:'ccc',password:'123456'}
// 待执行的sql语句
const sqlStr='insert into users (username,password) values (?,?)'
// 执行sql语句
db.query(sqlStr,[user.username,user.password],(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    // 如果执行的insert into ，则results是一个对象
    // 可以通过affectedRows属性，来判断是否插入数据成功
    if(results.affectedRows === 1){
        console.log('插入成功');
    }
})
*/

// 插入数据的便捷方式
/*
const user={username:'aa',password:'123456'}
// 定义待执行的sql语句
const sqlStr='insert into users set ?'
// 执行sql语句
db.query(sqlStr,user,(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    if(results.affectedRows===1){
        console.log('插入数据成功');
    }
})
*/

// 更新数据
/*
const user ={id:3,username:'bbb',password:'000'}
// 定义sql语句
const sqlStr='update users set username=?,password=? where id=?'
// 执行sql语句
db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    // 注意：执行了update语句之后，执行的结果也是一个对象，根据affectedRows判断
    if(results.affectedRows===1){
        console.log('执行成功');
    }
})
*/

// 更新数据的快捷方式
/*
const user ={id:4,username:'aaaa',password:'000'}
// 定义sql语句
const sqlStr='update users set ? where id= ?'
// 执行sql语句
db.query(sqlStr,[user,user.id],(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    if(results.affectedRows===1){
        console.log('更新成功');
    }
})
*/

// 删除id为5数据
/*
// 待执行的sql语句
const sqlStr='delete from users where id= ? '
// 执行sql语句
db.query(sqlStr,2,(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    // 执行delete语句之后，结果也是一个对象，包含affectedRows属性
    if(results.affectedRows===1){
        console.log('删除成功');
    }
})
*/

// 标记删除
const sqlStr='update users set status=? where id=?'
db.query(sqlStr,[1,3],(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    // 执行delete语句之后，结果也是一个对象，包含affectedRows属性
    if(results.affectedRows === 1){
        console.log('删除成功');
    }
})


