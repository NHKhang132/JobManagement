import {DataTypes} from 'sequelize'
import sequelize from '../database/database.js'

import {Staff} from './staff.js'
import {Owner} from './owner.js'
import {Shop} from './shop.js'

export const Request = sequelize.define('requests', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isOwnerSent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isAccept: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },  
}, {
    timestamps: true
})

Owner.hasMany(Request, {
    foreignKey: 'ownerId',
    sourceKey: 'id',
})

Shop.hasMany(Request, {
    foreignKey: 'shopId',
    sourceKey: 'id',
})

Staff.hasMany(Request, {
    foreignKey: 'ownerId',
    sourceKey: 'id',
})

Request.belongsTo(Owner, {
    foreignKey: 'ownerId',
    targetKey: 'id',
})

Request.belongsTo(Shop, {
    foreignKey: 'shopId',
    targetKey: 'id',
})

Request.belongsTo(Staff, {
    foreignKey: 'staffId',
    targetKey: 'id',
})