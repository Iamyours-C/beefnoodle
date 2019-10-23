// 导入数据库连接池
let query = require('./mysql')
let url = require('url')
let path = require('path')
// 数据抛出
module.exports={
  // 获取轮播图图片
   async getbanner(req,res){
        // 操纵数据库语句 没筛选获取
        let sql = 'select * from planting'
        // 用MySQl里的query方法获取对象    第二个参数为表内数据（筛选目标没有可不填）
        let imgsrc = await query( sql,[])
      //回调函数 res.json里的值会传到ajax里success：function（res）{} 
      res.json({
        success:true,
        // 获取的数据
        data:({
          imgsrc
        }),
        message:'轮播图片'
      
      })
    },
       // 获取商店环境图片
     async getstoremain(req,res){
      
      let sql = 'select * from store where id <= 9'
      let imgsrc = await query( sql,[])
      
    res.json({
      success:true,
      data:({
        imgsrc
      }),
      message:"哎哟"
    
    })
    },
     // 获取证书照图片
    async getcertificate(req,res){
      
      let sql = 'select * from store where id >=10'
      let imgsrc = await query( sql,[])

    res.json({
      success:true,
      data:({
        imgsrc
      }),
      message:"证书照片"
    
    })
    },
    // 获取特色美食图片 获取风味小吃图片
    async getallfood(req,res){
      
      let sql = 'select * from goods'
      let imgsrc = await query( sql,[])

    res.json({
      success:true,
      data:({
        imgsrc
      }),
      message:"特色菜品"
    
    })
    },
     // 获取特色美食图片 
    async getspecialfood(req,res){
      
      let sql = 'select * from goods where id<=6'
      let imgsrc = await query( sql,[])

    res.json({
      success:true,
      data:({
        imgsrc
      }),
      message:"特色菜品"
    
    })
    },
     // 获取风味小吃图片
    async gettypicalfood(req,res){
      
      let sql = 'select * from goods where id>= 9'
      let imgsrc = await query( sql,[])

    res.json({
      success:true,
      data:({
        imgsrc
      }),
      message:"风味小吃"
    
    })
    },
    // 获取食品封面图片
    // async getvideo(req,res){
      
    //   let sql = 'select * from img'
    //   let imgsrc = await query( sql,[])

    // res.json({
    //   success:true,
    //   data:({
    //     imgsrc
    //   }),
    //   message:content
    
    // })
    // }
}