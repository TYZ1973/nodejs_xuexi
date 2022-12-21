
const mysql = require('mysql')  //导入MySQL模块
const db = mysql.createPool({   //建立与MySQL的数据库连接
    host:'127.0.0.1',           //数据库的ip 地址
    user:'root',                //数据库的登录用户名
    password:'000000',          //数据库的登录密码
    database:'my_db_01'         //选择要操作的数据库
})


db.query('SELECT * from users where id =1',(err,result)=>{
    if(err) return console.log(err.message);
    console.log(result);
})

