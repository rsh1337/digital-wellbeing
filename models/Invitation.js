import mongoose from 'mongoose'

const InvitationSchema = new mongoose.Schema({
    invitation: {
        type: String,
        required: true
    },
    createdby:{
        type: String,
        required: true
    },
    since: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.models.Invitation || mongoose.model('Invitation', InvitationSchema)