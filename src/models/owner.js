import {DataTypes} from 'sequelize'
import sequelize from '../database/database.js'

    import {Shop} from './shop.js'
    export const Owner = sequelize.define('owners', {
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
    });

    Owner.hasMany(Shop, {
        foreignKey: 'ownerId',
        sourceKey: 'id'
    });
    
    Shop.belongsTo(Owner, {
        foreignKey: 'ownerId',
        targetKey: 'id'
    });
    

