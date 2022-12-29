// 用户的路由模块

// 1.导入express
const express=require('express')
// 2.导入用户路由处理函数对应的模块
const router=express.Router()

// 5.导入验证数据的中间件
const expressJoi=require('@escook/express-joi')
// 6.导入需要的验证规则的对象,使用解构赋值
const {reg_login_schema}=require('../schema/user')

// 4.导入用户处理函数对应的模块
const user_handler=require('../router_handler/user')

// 3.8.注册新用  expressJoi(reg_login_schema)：检测表单合法性
router.post('/reguser',expressJoi(reg_login_schema),user_handler.regUser)

// 9.登录
router.post('/login',expressJoi(reg_login_schema),user_handler.login)

module.exports=router