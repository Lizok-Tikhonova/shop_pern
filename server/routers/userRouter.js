const Router = require('express')
const router = new Router() // обект маршрута


router.post('/registration', (req, res)=>{
    
})
router.post('/login', (req, res)=>{
    
})
router.get('/auth', (req, res)=>{
    const {id} = req.query // получаем параметр строки запроса
    res.json(id)
})

module.exports = router