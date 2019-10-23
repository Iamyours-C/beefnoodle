// 引入读取图片的函数功能
let getimage = require('./getimage');
// 引入读取文本的函数功能
let gettexts = require('./gettexts') ;
// 合并函数
let option = Object.assign({},getimage,gettexts)

module.exports = option