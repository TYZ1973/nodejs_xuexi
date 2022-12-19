const m = require('./test自定义模块.js')
console.log(m);



console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);  //true
//module.exports 和 exports 指向同一个对象， 但是以module.exports为准   