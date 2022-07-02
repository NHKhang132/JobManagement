import {DataTypes} from 'sequelize'
import sequelize from '../database/database.js'

import {Staff} from './staff.js'
import {Address} from './address.js'

export const Shop = sequelize.define('shops', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    logo: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },  
}, {
    timestamps: true
})

Shop.hasMany(Staff, {
    foreignKey: 'shopId',
    sourceKey: 'id',
})

Staff.belongsTo(Shop, {
    foreignKey: 'shopId',
    targetKey: 'id',
})

Address.hasOne(Shop, {
    foreignKey: 'addressId',
    sourceKey: 'id',
})

Shop.belongsTo(Address, {
    foreignKey: 'addressId',
    targetKey: 'id',
})



