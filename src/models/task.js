const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
    done: {type: Boolean, default: false},
    name: {type: String, required: true},
   
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        require: true
    }
})

module.exports = mongoose.model('Task', taskSchema)