const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Players extends Model {}

Players.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allolwNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allolwNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allolwNull: false,
        },
        jersey: {
            type: DataTypes.INTEGER,
            allolwNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allolwNull: false,
        },
        teamsId: {
            type: DataTypes.INTEGER,
            references: {
              model:"teams",
              key: "id",
            }
        },
        rosterId: {
            type: DataTypes.INTEGER,
            references: {
              model:"roster",
              key: "id",
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'players',
    }
)

module.exports = Players;