const express=require('express');
const app=express();
const UserRouter=require('./Routes/users');
const bodyparser=require('body-parser');
const sequelize=require('./model/sequelize');
const cors=require('cors')

app.use(bodyparser.json());
app.use(cors());

app.use('/user',UserRouter);

//create all tables
sequelize.sync().then(()=>console.log("sync is completed")).catch((err)=>console.log(err));

const server=app.listen(3001,()=>console.log("server is running"));

module.exports=server;