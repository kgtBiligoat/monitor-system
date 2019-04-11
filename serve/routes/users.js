const router = require('koa-router')()
const userSchema = require('../schema/user.js')
const portSchema = require('../schema/port.js')
const dataSchema = require('../schema/data.js')

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
          { cnName: '数据编辑', enName: 'EditData' },
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

router.post('/changeUserInfo', async (ctx) => {
  let userInfo = ctx.request.body
  let id = ctx.cookies.get('userId')
  let doc = await userSchema.update({"_id": id}, userInfo)
  if(doc) {
    ctx.body = {
      data: {},
      msg: '添加成功',
      status: 1
    }
  } else ctx.body = {
    data: {},
    msg: '添加失败',
    status: -1
  }
})


router.get('/getPortData', async (ctx, next) => {
  let username = ctx.request.query.username
  let doc = await portSchema.findOne({'username': username})
  if(doc) {
    ctx.body = {
      status: 1,
      msg: '查找成功',
      data: {
        ...doc._doc
      }
    }
  } else {
    ctx.body = {
      msg: '查找失败',
      status: -1,
      data: {}
    }
  }
})
router.get('/setPortData', async (ctx, next) => {
    let _id = ctx.cookies.get('userId')
    console.log(_id,1)
    let doc = await userSchema.findOne({'_id': _id})
    if(doc) {
      if(doc.isSetPort === false) {
        let userDoc = await userSchema.update({'_id': _id}, {$set:{'isSetPort': true}})
        if(userDoc) {
          ctx.body = {
            msg: '开启成功',
            status: 1,
            data: {}
          }
        } else {
          ctx.body = {
            msg: '开启失败',
            status: -1,
            data: {}
          }
        }
      } else {
        ctx.body = {
          msg: '已经开启',
          status: 0,
          data: {}
        }        
      }

    } else {
      ctx.body = {
        msg: '用户不存在',
        status: -1,
        data: {}
      }
    }
})

module.exports = router
