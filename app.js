import express from "express"
import userRoutes from "./src/routes/users.routes.js"
import ordersRoutes from "./src/routes/orders.routes.js"
import businessRoutes from "./src/routes/business.routes.js"

const app = express()

//Routes
app.use('/api/users', userRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/business', businessRoutes);

//Listener
app.listen(3000, () => console.log('Server running on port 3000'))