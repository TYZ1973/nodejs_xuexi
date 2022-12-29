/*
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);//true
*/
const username='zs'
exports.username=username
exports.age=20
exports.sayHello=function(){
    console.log('hello');
}

// 最终向外共享的结果都是module.exports所指的对象