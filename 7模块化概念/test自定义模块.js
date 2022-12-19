module.exports.username='zs';
module.exports.sayHello=function(){

    console.log('hello!');
}

const age = 20;

module.exports.age=age;  // 向外共享成员

//这里共享结果为 { username: 'zs', sayHello: [Function (anonymous)], age: 20 }

//------------------如果此时我让 module.exports 指向一个新的对象

module.exports = {

    nickname:'xhhh',
    sex : 'male'
}

//那么就会改变指向        输出结果为{ nickname: 'xhhh', sex: 'male' }

