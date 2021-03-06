const Sequelize = require("sequelize");
const sequelize= require("../util/database");

const Country =sequelize.define("countries",{
    Code:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=Country;