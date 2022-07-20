var fs = require('fs');
//写文件
function writeFile(data) {
  fs.writeFile('./index-cp.js', data, function (err) {
    if (err) {
      throw err;
    } else {
      console.log('文件写入成功');
    }
  });
}

// 复制文件
function copyFile() {
  console.log('----------开始读取文件---------')
  var data = fs.readFileSync('./index.js');
  console.log(data);
  writeFile(data);
  console.log('----------读取结束---------')
}

copyFile();