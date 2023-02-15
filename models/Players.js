const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Players extends Model {}

Players.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jersey: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
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