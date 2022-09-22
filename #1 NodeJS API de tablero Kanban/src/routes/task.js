const express = require('express')
const userModel = require('../models/task')


const router  = express.Router();

//añadir tarea

router.post('/boards', (req, res) =>{
    if(!req.body.stage){
        req.body.stage = 1
    }
    const user = userModel(req.body)
    user.save().then((data) => res.json(data))
})

router.put('/boards/:id', (req, res) =>{
    const { id } = req.params
    let task
    userModel.findById({_id : id}).then((data) => {
        if (data.stage < 4) {
            data.stage = data.stage + 1
            task = data
            userModel.updateOne({_id: id}, {$set: {title: task.title, id: task.id, stage: task.stage}})
         .then((data) => {
            res.status(201)
            res.json(data)
         })
        }else{
            task = data
            userModel.updateOne({_id: id}, {$set: {title: task.title, id: task.id, stage: task.stage}})
         .then((data) => {
            res.status(400)
            res.json(data)
         })
        }
        console.log(task);
        
    })
    
   
             
})

module.exports = router