const express = require('express')
const router = express.Router()

const Product = require('./../models/product.model')

// Endpoints
router.get('/list', (req, res, next) => {
    Product.find()
        .then(allProducts => res.render('products/list', {
            allProducts
        }))
        .catch(err => netx(err))
})

router.get('/details/:productId', (req, res) => {

    Product
        .findById(req.params.productId)
        .then(theProduct => res.render('products/details', theProduct))
        .catch(err => netx(err))
})

module.exports = router





// router.get('/detalle/:bookId', (req, res) => {

//     Book
//         .findById(req.params.bookId)
//         .populate('author') // Se popula el nombre del campo
//         .then(theBook => res.render('books/details', theBook))
//         .catch(err => console.log("Error en la BBDD", err))
// })


// router.get('/crear', (req, res) => {
//     res.render('books/create-form')
// })

// router.post('/crear', (req, res) => {

//     const {
//         title,
//         description,
//         author,
//         rating
//     } = req.body

//     Book
//         .create({
//             title,
//             description,
//             author,
//             rating
//         })
//         .then(() => res.redirect('/libros/listado'))
//         .catch(err => console.log("Error en la BBDD", err))
// })


// router.get('/editar', (req, res) => {

//     Book
//         .findById(req.query.bookId)
//         .then(theBook => res.render('books/edit-form', theBook))
//         .catch(err => console.log("Error en la BBDD", err))
// })


// router.post('/editar/:bookId', (req, res) => {

//     const {
//         title,
//         description,
//         author,
//         rating
//     } = req.body

//     Book
//         .findByIdAndUpdate(req.params.bookId, {
//             title,
//             description,
//             author,
//             rating
//         }, {
//             new: true
//         })
//         .then(() => res.redirect(`/libros/detalle/${req.params.bookId}`))
//         .catch(err => console.log("Error en la BBDD", err))
// })