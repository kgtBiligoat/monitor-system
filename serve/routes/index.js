const router = require('koa-router')()
const userSchema = require('../schema/user.js')

router.prefix('/api')

router.post('/signUp', async (ctx, next) => {
    let param = ctx.request.body

    let doc = await userSchema.findOne({ 'username': param.username })
    if (doc) {
      ctx.body = {
        msg: '用户名已存在',
        status: 1,
        data: {}
      }
    } else {
      let user = new userSchema({
        ...param
      })
      let data = await user.save()
      if(data) {
        ctx.body = {
          msg: '注册成功',
          status: 1,
          data: {
            id: data._id
          }
        }
      }
      else {
        ctx.body = {
          msg: '注册失败',
          status: -1,
          data: {
            id: -1
          }
        }
      }
    }
})

router.post('/signIn', async (ctx, next) => {
  let param = ctx.request.body
  let doc = await userSchema.findOne({ 'username': param.username })
  if (doc) {
    console.log(doc.password, param.password)
    if (doc.password === param.password) {
      ctx.body = {
        msg: '登陆成功',
        status: 1,
        data: {
          ...doc._doc
        }
      }
    } else {
      ctx.body = {
        msg: '用户名或者密码错误',
        status: 0,
        data: {}
      }
    }

  } else {
    ctx.body = {
        msg: '用户名或者密码错误',
        status: -1,
        data: {}
    }
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
