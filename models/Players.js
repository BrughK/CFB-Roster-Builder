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
        firstname: {
            type: DataTypes.STRING,
            allolwNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allolwNull: false,
        },
        jersey: {
            type: DataTypes.INTEGER,
            allolwNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allolwNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allolwNull: false,
            references: {
                model: "teams",
                key: "id",
            }
        },
        roster_id: {
            type: DataTypes.INTEGER,
            allolwNull: false,
            references: {
                model: "roster",
                key: "id",
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'players',
    }
)

module.export = Players; 