/*
 * Author       : OBKoro1
 * Date         : 2020-07-15 21:32:18
 * LastEditors  : OBKoro1
 * LastEditTime : 2020-07-16 22:09:15
 * FilePath     : \reactc:\Users\86187\run-success-icon\index.js
 * Description  : 
 * https://github.com/OBKoro1
 */ 
let fs = require('fs');
let path = require('path');
class RunSuccessIcon {
  initRunIcon(option={}) {
    let data,iconType,dirs=path.resolve(__dirname,'img');
    iconType = option.iconType || 'buddha';
    let files=fs.readdirSync(dirs);
    let str=files.map(file=>path.join(dirs,file)).filter(file=>file.includes(iconType)).join()
    data=fs.readFileSync(str,'utf-8');
    return data;
  }
  handlerRunConfig(){
    let data;
    if(fs.existsSync(path.resolve(__dirname,'../../runIconConfig'))){
      let dirs=path.resolve(__dirname,'../../runIconConfig');
      let files=fs.readdirSync(dirs);
      let file=files.map(file=>path.join(dirs,file)).join();
      data=fs.readFileSync(file,'utf-8');
    }
    return data;
  }
}
let obj=new RunSuccessIcon();
exports.initRunIcon=obj.initRunIcon;
exports.handlerRunConfig=obj.handlerRunConfig;


