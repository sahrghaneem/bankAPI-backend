const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = new Schema({
name:{
    type:String,
    required:true
},
country:{
    type:String,
    required:true
},
passportId:{
    type:Number,
    required:true
},
username:{
    type:String,
    required:true
},
cash:{
    type:Number,
    default:0,
    required:false
},
cridet:{
    type:Number,
    default:0,
    required:false
},

});


const bankModel = mongoose.model('bankdata', bankSchema);


module.exports = {
    bankModel
}

