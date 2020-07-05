const express = require('express');
const router = express.Router()

const User = require("../models/user.model")
const Product = require("../models/product.model")
const Store = require('../models/store.model')

router.get('/profile', (req, res, next) => {
    User
        .find()
        .then(() => res.render('clients/profile'))
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/edit/:id', (req, res) => {
    User.findById(req.query.id)
        .then(() => res.render('clients/edit-form'))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/edit', (req, res, next) => {
    const {
        username,
    } = req.body
    User
        .findByIdAndUpdate(req.query.id, {
            username,
        }, {
            new: true
        })
        .then(() => res.redirect(`/client/profile`))
        .catch(err => console.log("Error en la BBDD", err))
})











// router.get('/api/:id', (req, res, next) => {

//     let storeId = req.params.id

//     Store
//         .findById(storeId)
//         .then(oneStore => res.json({
//             restaurant: oneStore
//         }))
//         .catch(err => next(err))
// })




module.exports = router