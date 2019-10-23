// 引入express插件
let express = require('express');
// 执行express方法
let app = express();
// 导入router执行
let router = require('./router');
// 解决跨域
app.all('*', function(req, res, next){
	
	res.header("Access-Control-Allow-Origin", "*");
	next()
	
})
// 启用静态图片文件夹
app.use(express.static("./upload"))
// 启用接口名字和导入回调函数
// 只获取文本 公司新闻  常见问题  行业动态
app.get('/getnewstext',router.getcompanynewstext)

app.get('/getquestiontext',router.getquestiontext)

app.get('/getdynamictext',router.getdynamictext)

// 获取图片  获取所有食物图片 主页轮播  店铺照片  证书照片  特色美食  风味小吃
app.get('/getallfood',router.getallfood)

app.get('/getbannermain',router.getbanner)

app.get('/getstoremain',router.getstoremain)

app.get('/getcertificate',router.getcertificate)

app.get('/getspecialfood',router.getspecialfood)

app.get('/gettypicalfood',router.gettypicalfood)

// 获取副文本详详情内容页面  公司新闻详情页   行业动态详情页  问答详情页 
app.get('/getnewsdetail',router.getnewsdetail)

app.get('/getdynamicdetail',router.getdynamicdetail)

app.get('/getquestiondetail',router.getquestiondetail)

// app.get('/getvideo',router.getvideo)

// 监听端口
app.listen(3000,function(){
	// 每次执行服务器答应端口号
	console.log('端口号为：3000')
})
