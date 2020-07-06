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

// Check role ADMIN


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



// ADMIN ALL USERS DETAILS
router.get('/profileDetails/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(theUser => res.render('private/profile/profileDetails', theUser))
        .catch(err => console.log('Error en la BBDD', err))
})

// ADMIN EDIT USERS
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
        role,
        password
    } = req.body

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)
    User
        .findByIdAndUpdate(req.query.userId, {
            username,
            role,
            password: hashPass
        }, {
            new: true
        })
        .then(() => res.redirect(`/admin/profileDetails/${req.query.userId}`))
        .catch(err => console.log("Error en la BBDD", err))
})

// ADMIN CREATE NEW USERS
router.get('/newUser', (req, res, next) => {
    User.find()
        .then(allUsers => res.render('private/profile/profileCreate-form', {
            allUsers
        }))
        .catch(err => next(err))
})

router.post('/newUser', (req, res, next) => {
    const {
        username,
        role,
        password
    } = req.body

    if (!username || !password) {
        res.render("private/profile/profileCreate-form", {
            errorMsg: "Rellena el usuario y la contraseña"
        })
        return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    User.findOne({
            username
        })
        .then(user => {
            if (user) {
                res.render("private/profile/profileCreate-form", {
                    errorMsg: "El usuario ya existe en la BBDD"
                })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({
                    username,
                    role,
                    password: hashPass
                })
                .then(() => res.redirect('/admin/profileList'))
                .catch(() => res.render("admin/profile/profileCreate-form", {
                    errorMsg: "No se pudo crear el usuario"
                }))
        })
})

// ADMIN DELETE USER
router.get('/deleteUser', (req, res, next) => {
    User.findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/admin/profileList'))
        .catch(err => next(err))
})

// ADMIN CREATE PRODUCT
router.get('/newProduct', (req, res, next) => res.render('private/product/productCreate-form'))

router.post('/newProduct', (req, res) => {

    const {
        category,
        type,
        name,
        description,
        price,
        img
    } = req.body

    Product
        .create({
            category,
            type,
            name,
            description,
            price,
            img
        })
        .then(() => res.redirect('/admin/productList'))
        .catch(err => console.log("Error en la BBDD", err))
})


// ADMIN ALL PRODUCTS
router.get('/productList', (req, res, next) => {
    Product.find()
        .then(allProducts => res.render('private/product/productList', {
            allProducts
        }))
        .catch(err => netx(err))
})

// ADMIN EDIT PRODUCT
router.get('/productDetails', (req, res) => {

    Product
        .findById(req.query.productId)
        .then(theProduct => res.render('private/product/productDetails', theProduct))
        .catch(err => netx(err))
})

router.get('/editProduct', (req, res) => {
    Product
        .findById(req.query.productId)
        .then(theProduct => res.render('private/product/productEdit-form', {
            theProduct
        }))
        .catch(err => console.log("Error en la BBDD", err))
})

// router.post('/editProduct', (req, res, next) => {
//     const {
//         category,
// type,
// name,
// description,
// price,
// img       
//     } = req.body
//     Product
//         .findByIdAndUpdate(req.query.productId, {
//          // type,
// name,
// description,
// price,
// img
// }, {
//             new: true
//         })
//         .then(() => res.redirect(`/admin/productDetails/${req.query.productId}`))
//         .catch(err => console.log("Error en la BBDD", err))
// })


router.get('/deleteProduct', (req, res, next) => {
    Product
        .findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/admin/productList'))
        .catch(err => next(err))
})

module.exports = router