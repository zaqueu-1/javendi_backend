const router = require('express').Router();
const userRouter = require('./user')
const loginRouter = require('./login')
const productRouter = require('./product')
const serviceRouter = require('./service')

router.use('/', userRouter)
router.use('/', loginRouter)
router.use('/', productRouter)
router.use('/', serviceRouter)

module.exports = router;