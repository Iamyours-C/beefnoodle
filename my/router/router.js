
let path = require('path');

// 引入上传图片模型
let formidable = require('formidable');

// 注册接口
let url = require('url');
let common = require('./common');
let sendEmail = require('./nodemailer');
let data = require('./sql');
let jwt =require('jsonwebtoken')

let mysql = require('mysql')
// 创建数据库连接
let connect = mysql.createConnection({
    host:'192.168.97.233',
    user:'root',
    password:'root',
    database:'student2'
})

// 连接数据库
connect.connect()

module.exports = {
    /**
     * @description 获取商品列表信息
     * 调用函数：getSpecialfood(req,res)
     * @param req 请求数据
     * @param res 响应数据
     */

    //  特色菜品
    getSpecialfood(req,res) {
        // 查询数据库数据
        connect.query('select * from goods', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },

    // 店面形象企业荣誉
    getSpecialfood2(req,res) {
        // 查询数据库数据
        connect.query('select * from store', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },

    // 轮播图
    getSpecialfood3(req,res) {
        // 查询数据库数据
        connect.query('select * from planting', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },

    // 新闻与动态
    getSpecialfood4(req,res) {
        // 查询数据库数据
        connect.query('select * from trends', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },

    // 常见问题
    getSpecialfood5(req,res) {
        // 查询数据库数据
        connect.query('select * from problem', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },

    // 文章集合
    getSpecialfood6(req,res) {
        // 查询数据库数据
        connect.query('select * from collection', function(err,data){
            if(!err){
                // 返回接口数据，并结束接口请求
                res.json({
                    status:200,
                    data:data
                })
            }else {
                res.json({
                    status:500,
                    data:[]
                })
            }
        })

    },
    
    // 上传数据到数据库
    addGoods: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields,files){
            
            // 将获取的参数写入数据库
            let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into goods(name,img,class) values(?)'
            let data = [fields.name,filebase,fields.class]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })
    
        })
    
    },

    addStore: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields,files){
            
            // 将获取的参数写入数据库
            let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into store(name,img,class) values(?)'
            let data = [fields.name,filebase,fields.class]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })  
        })  
    },

    addJasm: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields){
            
            // 将获取的参数写入数据库
            // let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into trends(name,class,dates,bars,cont) values(?)'
            let data = [fields.name,fields.class,fields.dates,fields.bars,fields.cont]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })
    
        })
    
    },

    addPlant: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields,files){
            
            // 将获取的参数写入数据库
            let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into planting(img) values(?)'
            let data = [filebase]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })  
        })  
    },

    addProblem: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields){
            
            // 将获取的参数写入数据库
            // let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into problem(name,cont) values(?)'
            let data = [fields.name,fields.cont]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })  
        })  
    },

    addCollection: function(req,res){
        // 获取请求的参数
        // 获取传入的form表单 解析地址传入的form表单
        let form = new formidable.IncomingForm();
    
        // 设置图片上传的地址
        form.uploadDir = './upload'
    
        // 保留图片的后缀名
        form.keepExtensions = true
    
        // 解析参数
        // fields 除了上传图片的其他数据
        // files 上传的文件
        form.parse(req,function(err,fields){
            
            // 将获取的参数写入数据库
            // let filebase = path.parse(files.img.path).base
    
            let sql = 'insert into collection(title,class,dates,detail) values(?)'
            let data = [fields.name,fields.class,fields.dates,fields.detail]
            connect.query(sql,[data],function(err,data){
                if (!err) {
                    res.json({
                        status: 200,
                        data: ''
                    })
                }
            })
    
        })
    
    },
    deleteGoods:function(req,res){
        let reqbody = req.body;
        console.log(reqbody.good)
        let sql = "delete from goods where id = ?"
        connect.query(sql,[reqbody.good],function(err,data){
            if(!err){
                res.json({
                    status:200,
                    data:''
                })
            }
        })    
},
deleteStore:function(req,res){
    let reqbody = req.body;
    console.log(reqbody.good)
    let sql = "delete from store where id = ?"
    connect.query(sql,[reqbody.good],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })    
},
deleteJasm:function(req,res){
    let reqbody = req.body;
    console.log(reqbody.good)
    let sql = "delete from trends where id = ?"
    connect.query(sql,[reqbody.good],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })    
},
deleteplant:function(req,res){
    let reqbody = req.body;
    console.log(reqbody.good)
    let sql = "delete from planting where id = ?"
    connect.query(sql,[reqbody.good],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })    
},
deleteProblem:function(req,res){
    let reqbody = req.body;
    console.log(reqbody.good)
    let sql = "delete from problem where id = ?"
    connect.query(sql,[reqbody.good],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })    
},
deleteCollection:function(req,res){
    let reqbody = req.body;
    console.log(reqbody.good)
    let sql = "delete from collection where id = ?"
    connect.query(sql,[reqbody.good],function(err,data){
        if(!err){
            res.json({
                status:200,
                data:''
            })
        }
    })    
},
getCode(req, res) {
        // 获取邮箱并验证邮箱是否正确
        let email = url.parse(req.url, true).query.email;
        console.log(url.parse(req.url,true))
        // let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        
        if (common.isEmail(email)) {
            let code = Math.round(Math.random() * 8999 + 1000);
            let html = `<h1 style="color:red">你的验证码为${code}</h1>`;
            sendEmail(email, '注册验证码', html, function (error, respsons) {
                console.log(error)
                if (error) {
                    res.json({
                        status: 510,
                        message: '验证码发送失败'
                    })

                } else {
                    let sql = 'insert into verfiy(email,code) values(?)';
                    query(sql, [[email, code]]).then(function (result) {
                        res.json({
                            status: 200,
                            data: code,
                            message: ''
                        })
                    }).catch(function (err) {
                        res.json({
                            status: 502,
                            message: '失败'
                        })
                    })
                }
            })
        } else {
            res.json({
                data: 501,
                message: '邮箱格式不正确'
            })
        }


    },
    // 注册
    async Register(req, res) {
        let params = req.body;
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        // 判断邮箱是否正确
        if (!params.email || !reg.test(params.email)) {
            res.json({
                status: 501,
                message: '邮箱不正确'
            })
            return false;
        }
        // 判断验证码是否存在
        if (!params.code) {
            res.json({
                status: 503,
                message: '验证码不存在'
            })
            return false;
        }
        // 判断密码是否存在
        if (!params.password) {
            res.json({
                status: 504,
                message: '密码不存在'
            })
            return false;
        }
        // 判断用户是否已经注册
        let isregister = await data.isRegister(params.email)
        if (!isregister) {
            res.json({
                status: 505,
                message: '用户已经注册'
            })
            return false;
        }
        let isCode = await data.isCode(params.email, params.code)
        if (!isCode) {
            res.json({
                status: 506,
                message: '验证码错误'
            })
            return false;
        }
        // 讲信息添加到用户表中
        let isdata = data.getRegister([params.email, params.password])
        if (isdata) {
            res.json({
                status: 200,
                message: ''
            })
        } else {
            res.json({
                status: 507,
                message: '注册失败，请重试'
            })
        }
    },
    // 验证账户和密码
    async Login(req, res) {
        let password = req.body.password;
        email = req.body.email;
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        // 判断邮箱是否正确
        if (!email || !reg.test(email)) {
            res.json({
                status: 501,
                message: '邮箱不正确'
            })
            return false;
        }
        if (!password) {
            res.json({
                status: 504,
                message: '密码不存在'
            })
            return false;
        }
        // 验证邮箱和密码
        let isUser =await data.isLogin([email, password]);
        if (isUser) {
            // 获取token
            // sign (加密数据 加密秘钥)
            let token =jwt.sign({email:email},'jwt',{
                expiresIn:60*60*1  /*超时时间*/
            })
            res.json({
                status: 200,
                data:{
                    token,
                    info:{
                        email:isUser.email,
                        userid:isUser.id,
                        status:isUser.status
                    }
                },
                message:'登陆成功'
            })
        }else{
            res.json({
                status: 509,
                message: '账户或者密码错误'
            })
            return false;
        }
    },
    // 登陆超时
    Verfiy(req,res){
        // 取得浏览器当前的token
        let token=req.body.token;
        // 验证token
        jwt.verify(token,'jwt',function(error,result){
           if(error){
               res.json({
                   status:512,
                   message:'登陆失效'
               })
           }else{
               res.json({
                   status:200,
                   message:''
               })
           }
            
        })
    },
    // 退出登陆
    async  outLogin(req,res){
        // 验证邮箱是否存在 返回状态 token
        let email=req.body.email;
        let isregister =await data.isRegister(email);
        console.log(isregister)
        // 邮箱不存在 退出成功
        if(!isregister){
            res.json({
                status:200,
                message:'退出成功'
            })
        }else{
            res.json({
                status:513,
                message:'用户未登陆'
            })
        }
    }
}








