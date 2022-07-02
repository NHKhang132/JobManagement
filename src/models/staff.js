import {DataTypes} from 'sequelize'
import sequelize from '../database/database.js'

import {Shop} from './shop.js'

export const Staff = sequelize.define('staffs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    dob: {
        type: DataTypes.STRING,
    },
    avt: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true
})
