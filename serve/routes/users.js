const router = require('koa-router')()

router.prefix('/users')

router.post('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

module.exports = router
