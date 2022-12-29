const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength : [20,'len must be less tan 20 carecters']
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

module.exports = mongoose.model('Ttodo',todoSchema);