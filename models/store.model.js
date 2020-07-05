const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

storeSchema.index({
    location: '2dsphere'
})

const Store = mongoose.model("Store", storeSchema)

module.exports = Store