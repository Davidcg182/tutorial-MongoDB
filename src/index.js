const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const usersRoutes = require('./Routes/Users.js')
const zapRoutes = require('./Routes/Zapatillas.js')
const app = express()
const port = process.env.PORT || 9000


//example midelware
app.use(express.json());
app.use('/api', usersRoutes, zapRoutes);
//app.use('/zap', zapRoutes)

// example route

app.get('/', (req, res) => {
    res.send("ruta .get de prueba")
})

// example conection mongoose

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conexion a mongo db OK'))
.catch((error) => console.log(error))

app.listen(port, console.log(`listening on port ${port}`))



