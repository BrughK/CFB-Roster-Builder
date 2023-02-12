const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Teams extends Model {}

Teams.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        teamName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teams',
    }
)

module.exports = Teams; 