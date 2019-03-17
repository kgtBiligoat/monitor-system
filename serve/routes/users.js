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
          '接入地址',
          '接入数据库'
        ]
      }
    } 
  } else if (name === "showData") {
    ctx.body = {
      status: 1,
      message: '选择数据展示', 
      data: {
        name: [
          '折线图',
          '饼图',
          '柱状图'
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
