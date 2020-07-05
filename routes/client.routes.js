const express = require('express');
const router = express.Router()

const User = require("../models/user.model")
const Product = require("../models/product.model")
const Store = require('../models/store.model')

// router.get('/profile', (req, res, next) => {
//    User
//         .find()
//         .then(myProfile => res.render('clients/profile', (req.query.Userid)){
//             myProfile
//         })
//         .catch(err => console.log("DDBB Error", err))
// })


router.get('/api', (req, res, next) => {
    Store
        .find({})
        .then(allStores => res.json({
            store: allStores
        }))
        .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {

    let storeId = req.params.id

    Store
        .findById(storeId)
        .then(oneStore => res.json({
            restaurant: oneStore
        }))
        .catch(err => next(err))
})




module.exports = router