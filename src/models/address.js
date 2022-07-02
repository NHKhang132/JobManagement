import {DataTypes} from 'sequelize'
import sequelize from '../database/database.js'

import {Shop} from './shop.js'
import {Staff} from './staff.js'

export const Address = sequelize.define('addresses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    number: {
        type: DataTypes.STRING,
    },
    street: {
        type: DataTypes.STRING,
    },
    ward: {
        type: DataTypes.STRING,
    },
    district: {
        type: DataTypes.STRING,
    },  
    province: {
        type: DataTypes.STRING,
    },  
}, {
    timestamps: true
});

Address.hasOne(Staff, {
    foreignKey: 'addressId',
    sourceKey: 'id',
})

Staff.belongsTo(Address, {
    foreignKey: 'addressId',
    targetKey: 'id',
})