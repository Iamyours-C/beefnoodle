// 封装数据库连接池

// 引入mysql
let mysql = require('mysql');
let config = require('./config');
let pool = mysql.createPool(config.mysql);

// let pool = mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     password:'root',
//     database:'shop'
// })
// 数据库操作

/**
 * @param {string} sql 数据库操作语句
 * @param {Array} data 查询数据库的数据
*/

let query = function(sql,data){
    return new Promise(function(resolve,reject){
        // getConnection 获取连接 回调函数中返回
        pool.getConnection(function(err,connection){
            console.log(err)
            console.log(connection)
            if(!err){
                // sql 查询的语句
                // data 查询过程中需要的数据
                // error 查询的错误信息
                // result 查询的结果
                connection.query(sql,data,function(error,result){
                    if(!error){
                        // 将查询成功返回的数据存入resolve中
                        resolve(result);
                    }else{
                        reject(error);
                    }
                    connection.release();
                })
            }else{
                reject(err);
            }
        })
    })
}


module.exports = query;