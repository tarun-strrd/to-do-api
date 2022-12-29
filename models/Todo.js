const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength : [20,'length must be less tan 20 charecters']
    },
    createdOn:{
        type:Date,
        default:Date.now()
    },
    status:{
        type: String,
        enum:["incompleted","completed","time over"],
        default: 'incompleted'
    }

});

module.exports = mongoose.model('Todo',todoSchema);