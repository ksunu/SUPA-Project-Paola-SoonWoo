const express = require('express')
const router = express.Router()
const User = require("./../models/user.model")
const Product = require("./../models/product.model")

const bcrypt = require("bcrypt")
const bcryptSalt = 10

// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')

// const checkRoleAdmin = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes('ADMIN') ? next('/admin/admin') : res.redirect('/login')

// Check logged in session
router.get('/profile', checkAuthenticated, (req, res) => res.render('private/profile', {
    user: req.user
}))

router.get('/admin', checkRole(['ADMIN']), (req, res, next) => {
    res.render('private/admin')
})

// -------------USERNAME-------------
// ADMIN Check logged in session & roles 
router.get('/profileList', checkRole(['ADMIN']), (req, res, next) => {
    User.find()
        .then(allUsers => res.render('private/profile/profiles', {
            allUsers
        }))
        .catch(err => console.log("DDBB Error", err))
})



// ALL USERS DETAILS
router.get('/profileDetails/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(theUser => res.render('private/profile/profileDetails', theUser))
        .catch(err => console.log('Error en la BBDD', err))
})

// EDIT USERS
router.get('/edit', (req, res) => {
    User.findById(req.query.userId)
        .then(theUser => res.render('private/profile/profileEdit-form', {
            theUser
        }))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/edit', (req, res, next) => {
    const {
        username,
        role
    } = req.body
    User
        .findByIdAndUpdate(req.query.userId, {
            username,
            role
        }, {
            new: true
        })
        .then(() => res.redirect(`/admin/profileDetails/${req.query.userId}`))
        .catch(err => console.log("Error en la BBDD", err))
})



module.exports = router