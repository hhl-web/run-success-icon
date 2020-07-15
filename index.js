/*
 * Author       : OBKoro1
 * Date         : 2020-07-15 21:32:18
 * LastEditors  : OBKoro1
 * LastEditTime : 2020-07-15 23:09:16
 * FilePath     : \reactc:\web-vue-案例\run-success-icon\index.js
 * Description  : 
 * https://github.com/OBKoro1
 */ 
let fs = require('fs');
let path = require('path');
class RunSuccessIcon {
  constructor(option={}) {
    this.iconType = option.iconType || 'buddha';
    this.dirs=path.resolve(__dirname,'img');
    this.init();
  }
  init() {
    let that = this;
    fs.readdir(that.dirs, function(err, files) {
      let arr=files.map(file=>path.join(that.dirs,file));
      let str = arr.filter((file) => {
        return file.includes(that.iconType);
      }).join();
      fs.readFile(str, 'utf8', function(err,data){
        console.log(data);
      })
    })
  }
}
module.exports=RunSuccessIcon;


