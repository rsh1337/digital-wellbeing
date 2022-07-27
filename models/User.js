import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    since: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)