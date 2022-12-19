function dateFormat(dtStr){
    const dt = new Date();
    const y =  dt.getFullYear();
    const m = padZero(dt. getMonth()+1);
    const d = padZero(dt.getDate());
    const hh = padZero(dt.getHours());
    const mm =padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return y+'-'+m+'-'+d+'   '+hh+':'+mm+':'+ss;
}

function padZero(x){
 return x>9? x: '0'+x;
}

module.exports ={
    dateFormat
}