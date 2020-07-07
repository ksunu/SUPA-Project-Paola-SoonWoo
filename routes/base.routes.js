const express = require('express')
const router = express.Router()

const Picture = require('../models/picture.model')

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