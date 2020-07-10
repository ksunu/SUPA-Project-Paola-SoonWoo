const express = require('express');
const router = express.Router()

const User = require("../models/user.model")
const Product = require("../models/product.model")
const Store = require('../models/store.model')

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const cloudUploader = require('../configs/cloudinary.config')

router.get('/profile', (req, res, next) => {
    User
        .find()
        .then(() => res.render('clients/profile'))
        .catch(err => next(err))
})

router.get('/edit/:id', (req, res) => {
    User.findById(req.query.id)
        .then(() => res.render('clients/edit-form'))
        .catch(err => next(err))
})

router.post('/edit', cloudUploader.single('imageFile'), (req, res, next) => {
    const {
        _id
    } = req.user

    const {
        username,
        name,
        address,
        contact,
    } = req.body

    const tempUsername = username || req.user.username
    const tempName = name || req.user.name
    const tempAddress = address || req.user.address
    const tempcontact = contact || req.user.contact
    const tempURL = req.file ? req.file.url : req.user.avatar

    User
        .findByIdAndUpdate({
            _id
        }, {
            username: tempUsername,
            name: tempName,
            avatar: tempURL,
            address: tempAddress,
            contact: tempcontact,
        }, {
            new: true
        })
        .then(() => res.redirect(`/client/profile`))
        .catch(err => next(err))
})


module.exports = router