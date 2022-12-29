/**
 在一个自定义模块中，默认情况下：module.exports={}
 */

const age=10
module.exports.age=age

// 向module.exports对象上挂在一个username属性
module.exports.username='zs'

// 向module.exports对象上挂在sayHello方法
module.exports.sayHello=function(){
    console.log('hello');
}

// 让module.exports指向一个全新的对象
module.exports={
    nickname:'小黑',
    sayHi(){
        console.log('hello');
    }
}

