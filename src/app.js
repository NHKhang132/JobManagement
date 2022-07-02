import express from 'express'

import ownerRoute from './routes/owner.route.js'
import staffRoute from './routes/staff.route.js'
import shopRoute from './routes/shop.route.js'

const app = express()
app.use(express.json())

app.use(ownerRoute);
app.use(staffRoute);
app.use(shopRoute);

export default app;