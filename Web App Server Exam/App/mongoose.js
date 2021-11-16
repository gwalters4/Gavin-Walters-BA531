const Mongoose = require('mongoose’);
const Schema = Mongoose.Schema;
const mySchema = new Schema({
    name:{type:String},
    dateCreated:{Date, default: Date.now},
    active:{Boolean, default: true}
});
module.exports = 
 Mongoose.model('Widget', mySchema);