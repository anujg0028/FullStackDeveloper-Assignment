const {DataTypes}=require('sequelize');
const sequelize=require('./sequelize');

const user=sequelize.define('User',{
  id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  heading: {
    type:DataTypes.STRING,
    allowNull:true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
},{
  tableName:'users',
  timestamps: false
});

module.exports=user;