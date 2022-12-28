const express = require('express');
const app = express();

const mw = function(req,res,next){
    console.log('xxxxxxxxxxxxxxxxxxxxx');
    next();
};

app.use(mw);

app.get('/',(req,res)=>{
    res.send('home');
})

app.get('/user',(req,res)=>{
    res.send('userpage')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
});
