const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/WebApp'
mongoose.connect(url, { useNewUrlParser: true });

const UserSchema = {

    email: {
        type: String
    },

    password: {
        type: String
    },


    name: {
        type: String
    },


    lastname: {
        type: String
    }
}


exports.User = mongoose.model('User', UserSchema)