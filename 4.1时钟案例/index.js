
            window.onload = function(){
                setInterval( ()=>{
                    var dt =new Date()
                    var HH = dt.getHours()
                    var mm = dt.getMinutes()
                    var ss = dt.getSeconds()
                    
                    document.querySelector('#HH').innerHTML=padZero(HH)
                    document.querySelector('#mm').innerHTML=padZero(mm)
                    document.querySelector('#ss').innerHTML=padZero(ss)
                    
                },1000)
            }
            function padZero(n){
                return n>9 ? n : '0'+n  //如果n不大于9 ， 那么 n 就等于 0+n 这里主要是为了在个位数前面加0  比如 11:06 这里的6前面+0
            }
        