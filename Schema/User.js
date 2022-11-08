const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    picture: {
        type: String
    },
    video: {
        type: String
    },
    image: {
        type: String
    }
})

mongoose.model('User' , userSchema);