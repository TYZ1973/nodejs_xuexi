// 这是路由模块

// 1.导入express
const express=require('express')

// 2.创建路由对象
const router=express.Router()

// 3.挂在具体的路由
router.get('/',(req,res)=>{
    res.send('Get user list')
})
router.post('/',(req,res)=>{
    res.send('Add new user')
})

// 4.向外导出路由对象
module.exports=router