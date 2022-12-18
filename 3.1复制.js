const fs = require('fs')




// 复制文件内容
fs.readFile('./files/1.txt', function(err, data) {
	if(!err) {
		console.log(data);
		// 将data写入到文件中
		fs.writeFile("./files/3.txt", data, function(err){
			if(!err){
				console.log("文件写入成功");
			}
		} );
	}
});