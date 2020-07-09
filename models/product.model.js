const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['fruta', 'verdura y hortaliza']
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product