const Sequelize=require('sequelize');

const sequelize=new Sequelize('assignment','root','root',{
    dialect: 'mysql',
    host: 'localhost',
    pool: {
      acquire: 30000,
      idle: 10000
    }
});

module.exports=sequelize;