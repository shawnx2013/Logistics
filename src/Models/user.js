const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;