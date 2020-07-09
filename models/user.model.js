const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    address: {
        type: String,
        coordinates: {
            type: [Number]
        },
        name: {
            type: String
        },
        contact: {
            type: Number
        },
    },
    contact: {
        type: Number
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CLIENT'],
        default: 'CLIENT'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User