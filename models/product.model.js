const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['fruta', 'verdura y hortaliza']
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product