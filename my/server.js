
// 监听接口
let express = require('express')
let router = require('./router')
let app = express();
var path = require('path');
var ueditor = require("ueditor");
var bodyParser = require('body-parser');
let jsonParser=bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use(express.static(__dirname + '/static'))
// 静态服务器  某个文件夹下的文件可以通过当前服务器设置的端口和
// ip访问
app.use(express.static(__dirname + '/straineds'))

app.use(express.static(__dirname + '/ueditor'))

// 静态文件

// upload 这个文件夹起了一个服务器
// 这个文件夹之后全部都用来存图片
app.use(express.static('./upload'))


// 跨域
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    next();
})

app.use('/ueditor/ue', ueditor(path.join(__dirname, 'static'), function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/'
    // var imgDir = __dirname + '/upload'
    console.log(imgDir)
     var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认图片上传地址
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            // file_url = __dirname + '/file'
            file_url = '/file/ueditor/'; //附件
        }
        if (ActionType === 'uploadvideo') {
            // file_url = __dirname + '/video'; //视频
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/config.json');
    }
}));


// 使用get请求监听接口
// 从数据库获取goods表中的数据并返回到接口数据中
app.get('/lists', router.getSpecialfood)

app.get('/lists2', router.getSpecialfood2)

app.get('/lists3', router.getSpecialfood3)

app.get('/lists4', router.getSpecialfood4)

app.get('/lists5', router.getSpecialfood5)

app.get('/lists6', router.getSpecialfood6)
// 获取商品分类列表
// app.get("/class",router.getClass)

// 监听添加内容的接口
// 特色菜品
app.post("/addgoods", router.addGoods)

// 店面形象
app.post("/addstore", router.addStore)

// 新闻和动态主
app.post("/addjasm", router.addJasm)

// 轮播
app.post("/addplant", router.addPlant)

// 常见问题
app.post("/addproblem", router.addProblem)

app.post("/addcollection", router.addCollection)

// 监听删除内容的接口
// 特色菜品
app.post("/deletegoods", urlencodedParser,router.deleteGoods)

// // 店面形象
app.post("/deletestore",urlencodedParser,router.deleteStore)

// // 新闻和动态主
app.post("/deleteJasm",urlencodedParser, router.deleteJasm)

// // 轮播
app.post("/deleteplants",urlencodedParser, router.deleteplant)

// // 常见问题
app.post("/deleteproblem",urlencodedParser, router.deleteProblem)

app.post("/deletecollection",urlencodedParser, router.deleteCollection)

// 获取消息列表
app.get('/code',router.getCode);
// 注册
app.post('/register',lencodedParser,router.Register);
// 登陆
app.post('/login',lencodedParser,router.Login);
// 验证是否登陆
app.post('/verfiy',lencodedParser,router.Verfiy);
// 退出登陆
app.post('/outlogin',lencodedParser,router.outLogin);
app.listen(3000)
console.log('port:'+3000)




