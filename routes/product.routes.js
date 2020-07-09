const express = require('express')
const router = express.Router()

const Product = require('./../models/product.model')

// Endpoints
router.get('/list', (req, res, next) => {
    Product.find()
        .then(allProducts => res.render('products/list', {
            allProducts
        }))
        .catch(err => next(err))
})

router.get('/details/:productId', (req, res) => {

    Product
        .findById(req.params.productId)
        .then(theProduct => res.render('products/details', theProduct))
        .catch(err => next(err))
})

module.exports = router