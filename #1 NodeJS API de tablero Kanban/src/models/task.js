const mongoose = require('mongoose')


const taskModel = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true
    },
    stage:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('task', taskModel)