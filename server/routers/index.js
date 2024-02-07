const Router = require('express')
const router = new Router() // обект маршрута
const deviceRoute = require('./deviceRouter')
const userRoute = require('./userRouter')
const typeRoute = require('./typeRouter')
const brandRoute = require('./brandRouter')


router.use('/user', userRoute)
router.use('/type', typeRoute)
router.use('/brand', brandRoute)
router.use('/device', deviceRoute)


module.exports = router