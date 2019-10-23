// 注册接口
let url = require('url');
let common = require('./common');
let sendEmail = require('./nodemailer');
let query = require('./mysql');
let data = require('./sql');
let jwt =require('jsonwebtoken')
module.exports = {
    // 验证码
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