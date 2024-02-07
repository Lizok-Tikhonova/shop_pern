const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') // чтобы отправлять запросы с браузера
const router = require('./routers/index.js')




const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json()) //чтобы приложение могло парсить json формат
app.use('/api', router)

app.get('/', (req, res)=>{
    res.status(200).json({message:"WORKINK"})
})

const start = async () => {
    try {
        await sequelize.authenticate() // функция для подключения к бд
        await sequelize.sync() // функция сверяет состояние бд со схемой данных
        app.listen(PORT, ()=>{console.log(`Server start ${PORT}`)})
    } catch (error) {
        console.log(error);
    }
}

start()