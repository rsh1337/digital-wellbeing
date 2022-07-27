import mongoose from 'mongoose'

const SugestiiSchema = new mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    poze: {
        type: Array
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote:{
        type: Number,
        default: 0
    },
    verify:{
        type: Boolean,
        default: false
    },
    since: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.models.Sugestii || mongoose.model('Sugestii', SugestiiSchema)