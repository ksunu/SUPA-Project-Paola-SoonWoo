const express = require('express')
const router = express.Router()

const Picture = require('../models/picture.model')
const User = require('../models/user.model')

// Check role ADMIN
const isBoss = user => user.role === 'ADMIN'
router.get('/', (req, res) => {
    if (req.user) {
        res.render('index', {
            isBoss: isBoss(req.user)
        })
    }
    res.render('index')
})

router.get('/', (req, res) => res.render('index'))


// GALLERY - CLOUDINARY
router.get('/gallery', (req, res, next) => {

    Picture.find()
        .then(allThePictures => res.render('private/pages/gallery-page', {
            allThePictures
        }))
        .catch(err => next(new Error(err)))
})

router.get('/galleryIndex', (req, res, next) => {

    Picture.find()
        .then(allPictures => res.render('index', {
            allPictures
        }))
        .catch(err => next(new Error(err)))
})

// router.get('/deleteImage', (req, res, next) => {
//     Picture
//         .findByIdAndDelete(req.file)
//         .then(() => res.redirect('/gallery'))
//         .catch(err => next(err))
// })


module.exports = router