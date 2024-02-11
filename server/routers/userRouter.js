const Router = require('express')
const router = new Router() // обект маршрута

const userController = require('../controlers/userController')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

console.log(userController)

module.exports = router