let query = require('./mysql')
module.exports={
    // 获取常见问题文本
    async getdynamictext(req,res){

      let sql = 'select * from trends where class= 2'
      let content = await query( sql,[])

    res.json({
      success:true,
      data:({
        content
      }),
      message:"行业动态数据"
    
    })
  },
  // 获取公司新闻文本
  async getcompanynewstext(req,res){

    let sql = 'select * from trends where class= 1'
    let newsvice = await query( sql,[])

  res.json({
    success:true,
    data:({
      newsvice
    }),
    message:"公司新闻数据"
  
  })
},
// 获取问答文本
    async getquestiontext(req,res){

      let sql = 'select * from problem'
      let question = await query( sql,[])

    res.json({
      success:true,
      data:({
        question
      }),
      message:"问答数据"
    
    })
  },
 // 获取详细页新闻文本
  async getnewsdetail(req,res){

    let sql = 'select * from collection where class = 1'
    let newsvice = await query( sql,[])

  res.json({
    success:true,
    data:({
      newsvice
    }),
    message:"公司新闻详细页面内容"
  
  })
},
// 获取详细页面公司动态文本
async getdynamicdetail(req,res){

  let sql = 'select * from collection where class = 2'
  let dynamic = await query( sql,[])

res.json({
  success:true,
  data:({
    dynamic
  }),
  message:"公司动态详细本页面内容"

})
},
// 获取详细页问答文本
async getquestiondetail(req,res){

  let sql = 'select * from collection where class = 3'
  let question = await query( sql,[])

res.json({
  success:true,
  data:({
    question
  }),
  message:"问答详细页面"

})
}

}