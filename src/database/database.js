import {Sequelize} from 'sequelize'

// const sequelize = new Sequelize ('jobmanagement', 'postgres', 'Khang132.', {
//     host: 'locahost',
//     dialect: 'postgres',
// })

const sequelize = new Sequelize('postgres://postgres:Khang132.@localhost:5432/jobmanagement')

export default sequelize;