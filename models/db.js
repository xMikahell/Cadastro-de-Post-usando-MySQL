const Sequelize = require('sequelize')
    //Conexão com o banco de dados MYSQL
    const sequelize = new Sequelize('posts', 'root', 'passwordhere', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}