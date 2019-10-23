// 数据库操作
let query=require('./mysql')
module.exports={
    // 查询数据库是否有邮箱
    isRegister:async function(email){
        let data = await query('select * from user where email = ?',email)
        
        if(data.length>0){
            // 表示已经注册
            return false;
        }else{
            //表示没有注册
            return true;
        }
    },
    // 查询验证码
    isCode:async function(email,code){
        let data=await query('select * from verfiy where email = ? order by createTime desc',email)
        if(data.length<=0) return false;
        if(data[0].code == code){
            return true;
        }
        return false;
    },
    // 写入数据库
    getRegister:async function(data){
        let sql = 'insert into user(email,password) values(?)';
        let result = await query(sql,[data]).catch(function(res){
            console.log(res)
        })
        if(result){
            return true;
        }else{
            return false;
        }
        
    },
    // 获取用户名和密码
    isLogin:async function(data){
        console.log(data)
        let sql='select * from user where email=? and password=?';
        let result = await query(sql,data);
        console.log(result)
        if(result.length>0){
            return result[0];
        }else{
            return false;
        }
    }
}