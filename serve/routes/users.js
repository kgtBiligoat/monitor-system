const router = require('koa-router')()

router.prefix('/api/users')

router.get('/bar', async (ctx, next) => {
  let name = await ctx.request.query.name
  if (name === 'messageMange') {
    ctx.body = {
      status: 1,
      message: '选择信息管理',
      data : {
        name: [
          { cnName: '展示', enName: 'Show' },
          { cnName: '修改', enName: 'Edit'}
        ]
      }
    }
  } else if (name === 'getData') {
    ctx.body = {
      status: 1,
      message: '选择数据接入',
      data: {
        name: [
          { cnName: '接入地址', enName: 'getAddress' },
          { cnName: '接入数据库', enName: 'getDataBase'}
        ]
      }
    } 
  } else if (name === "showData") {
    ctx.body = {
      status: 1,
      message: '选择数据展示', 
      data: {
        name: [
          { cnName: '折线图', enName: 'lineChart'},
          { cnName: '饼图', enName: 'pieChart'},
          { cnName: '柱状图', enName: 'columnChart'}
        ]
      }
    }
  } else {
    ctx.body = {
      status: -1,
      message: '错误',
      data: {}
    }
  }
})

module.exports = router
