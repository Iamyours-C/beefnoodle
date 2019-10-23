// 文档加载完成
let api = "http://127.0.0.1:3000";
$(function () {
    // 验证表单
    $(".register-form").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            code: {
                required: true,
            },
            password: {
                required: true,
                rangelength: [6, 18]
            },
            repassword: {
                required: true,
                equalTo: $("[name=password]")
            }
        }
    })
    // 获取验证码
    $("#getCode").click(function () {
        // 获取邮箱内容
        let email = $("[name=email]").val();
        let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        if (email && reg.test(email)) {
            // 发送请求 并获取验证码
            $.ajax({
                url: api + '/code',
                type: 'get',
                data: {
                    email: email
                },
                dataType: 'json',
                success(res) {
                    if (res.status == 200) {
                        // 验证码获取与倒计时                    
                            var cookie = $.cookie('cookie');
                            if (cookie) {
                                timeDown(cookie);
                            }
                            timeDown(60);
                            function timeDown(overTime) {
                                var _this = $("#getCode");
                                if (_this.hasClass('getCode')) {
                                    return;
                                }
                                _this.addClass('getCode');
                                _this.html(overTime + 's后获取');
                                var timer = setInterval(function () {
                                    overTime--;
                                    _this.html(overTime + 's后获取');
                                    $.cookie('cookie', overTime)
                                    if (overTime <= 0) {
                                        clearInterval(timer);
                                        _this.removeClass('getCode');
                                        _this.html('重新获取');
                                        $.removeCookie('cookie');
                                    }
                                }, 1000)
                            }
                    } else {
                        alert('验证码发送失败')
                    }
                }

            })
        } else {
            // 邮箱不正确
            alert("请输入正确的邮箱！")
        }
    })
    // 注册
    $(".register").click(function () {
        // 验证所有信息
        if ($(".register-form").valid()) {
            let email = $("[name=email]").val();
            let code = $("[name=code]").val();
            let password = $("[name=password]").val();
            password = hex_md5(password);
            // 发送注册请求
            $.ajax({
                url: api + '/register',
                type: 'post',
                data: {
                    email,
                    code,
                    password
                },
                dataType: 'json',
                success: function (res) {
                    if (res.status == 200) {
                        alert('注册成功');
                        window.location.href='http://127.0.0.1:3000/login.html';
                    }
                    else if (res.status == 505) {
                        alert('该邮箱已经注册过')
                    }
                    else if (res.status == 506) {
                        alert('验证码错误，请重试')
                    }
                    else {
                        alert('注册失败，请重试');
                    }
                }
            })
        }
    })

})
