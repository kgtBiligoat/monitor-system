const router = require('koa-router')()
const userSchema = require('../schema/user.js')
const dataSchema = require('../schema/data.js')
const portSchema = require('../schema/port.js')

router.prefix('/api')

router.post('/signUp', async (ctx, next) => {
    let param = ctx.request.body
    let doc = await userSchema.findOne({ 'username': param.username })
    if (doc) {
      ctx.body = {
        msg: '用户名已存在',
        status: 0,
        data: {}
      }
    } else {
      let user = new userSchema({
        ...param
      })
      let data = await user.save()
      if(data) {
        ctx.cookies.set('userId',data._id,{
          domain:'localhost', // 写cookie所在的域名
          path:'/',       // 写cookie所在的路径
          maxAge: 24*60*60*1000,   // cookie有效时长
          expires:new Date('2019-10-08'), // cookie失效时间
          httpOnly:false,  // 是否只用于http请求中获取
          overwrite:false  // 是否允许重写            
        })
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
    if (doc.password === param.password) {
      ctx.cookies.set('userId',doc._id,{
        domain:'localhost', // 写cookie所在的域名
        path:'/',       // 写cookie所在的路径
        maxAge: 24*60*60*1000,   // cookie有效时长
        expires:new Date('2019-10-08'), // cookie失效时间
        httpOnly:false,  // 是否只用于http请求中获取
        overwrite:false  // 是否允许重写            
      })
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

router.get('/logout', async (ctx, next) => {
  ctx.cookies.set('userId',{signed:false,maxAge:0})
  ctx.body = {
    msg: '登出',
    status: 1,
    data: {}
  }
})

router.get('/check', async (ctx, next) => {
  let id = ctx.cookies.get('userId')
  let doc = await userSchema.findOne({ '_id': id })
  if(doc) {
    ctx.body = {
      msg: 'cokkie存在',
      status: 1,
      data: doc
    }
  } else {
    ctx.body = {
      msg: 'cokkie不存在',
      status: -1,
      data: doc
    }    
  }
})

module.exports = router
