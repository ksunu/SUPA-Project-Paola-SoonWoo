const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
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
        details: {
            street: {
                type: String
            },
            number: {
                type: Number
            },
            postal_code: {
                type: Number
            },
            city: {
                type: String
            },
        }
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CLIENT', 'GUEST'],
        default: 'GUEST'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User