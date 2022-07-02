import app from './app.js'
import sequelize from './database/database.js'

// import {Owner} from './models/owner.js'
// import {Shop} from './models/shop.js'
// import {Staff} from './models/staff.js'
// import {Address} from './models/address.js'
// import {Request} from './models/request.js'

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
        app.listen(3000, () => {
            console.log('Server run on port 3000')})
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main()