const express = require('express')
const mongoose = require('mongoose');
const { route } = require('./routes/task');
const  routes =  require('./routes/task')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use('/api', routes)


///routes

app.get('/', (req, res) =>{
    res.send('ok')
})

//mongodb
mongoose.connect(process.env.MONGODB).then(() => console.log('conectado'))

app.listen(3000, () => console.log('server listening on port', 3000))