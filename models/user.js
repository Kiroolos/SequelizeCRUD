const Sequelize = require("sequelize");
const sequelize= require("../util/database");
const City = require("./city");
const User =sequelize.define("users",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
});


module.exports=User;