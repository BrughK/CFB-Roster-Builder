const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Roster extends Model {}

Roster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allolwNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        roster_player: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'roster',
    }
)

module.export = Roster; 