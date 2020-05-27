const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    email:{
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;