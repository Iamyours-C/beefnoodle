// 数据库连接封装
let mysql = require('mysql');
let config=require('../config');
let pool=mysql.createPool(config.mysql)
// 数据库操作
/* 
*@param{string} sql 查询数据库语句
*@param{Array} data 查询数据的数据
*/
let query=function(sql,data){
    return new Promise(function(resolve,reject){
        // getConnection 获取连接 回调函数中返回
        // err连接是否失败
        // connction 获取连接的连接信息
        pool.getConnection(function(err,connction){
            if(!err){
                // sql查询语句
                // data 查询过程中重要的数据
                // error 查询的错误信息
                // result 查询结果
                connction.query(sql,data,function(err,result){
                    if(!err){
                        // 将查询成功返回的数据存入resolve中
                        resolve(result)
                    }else{
                        reject(err)
                    }
                    connction.release()
                })
            }else{
                reject(err)
            }
        })
    })
}
module.exports=query;