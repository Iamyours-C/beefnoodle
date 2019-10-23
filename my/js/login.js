// 文档加载完成
let api = "http://127.0.0.1:3000";
$(function(){
    // 验证表单
    $(".login-form").validate({
        rules:{
            email:{
                required: true,
                email: true,
            },
            password:{
                required:true,
                rangelength: [6, 18]
            }
        }
    })
    // 判断是否登陆
    let token = window.localStorage.getItem('token');
   //if(token) window.location.href='http://192.168.97.233:3000/hero-bage.html';
    $(".login").click(function(){
        // 登陆信息
        let email=$("[name=email]").val();
        let password=$("[name=password]").val();
        password=hex_md5(password);
        $.ajax({
            url:api+'/login',
            type:'post',
            data:{
                email,
                password
            },
            dataType:'json',
            success:function(res){
                if(res.status == 200){
                    // 记录数据 并跳转到登陆成功页面
                    window.localStorage.setItem('token',res.data.token);
                    window.localStorage.setItem('info',JSON.stringify(res.data.info));
                    window.location.href='http://192.168.97.233:3000/hero-bage.html';
                }else{
                    alert('账户或者密码错误，请重试')
                }
            }
        })
    })
})