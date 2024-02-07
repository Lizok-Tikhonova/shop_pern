const {Sequelize} = require('sequelize')

module.exports= new Sequelize(
    'online_store',
    'postgres',
    '0000',
    {
        'host':'localhost',
        'dialect':'postgres'
    }
)