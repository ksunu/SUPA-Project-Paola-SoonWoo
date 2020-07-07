const express = require('express')
const router = express.Router()

const Picture = require('../models/picture.model')

router.get('/', (req, res) => res.render('index'))

router.get('/', (req, res, next) => {

    Picture.find()
        .then(allThePictures => res.render('/', {
            allThePictures
        }))
        .catch(err => next(new Error(err)))
})

router.get('/gallery', (req, res, next) => {

    Picture.find()
        .then(allThePictures => res.render('private/pages/gallery-page', {
            allThePictures
        }))
        .catch(err => next(new Error(err)))

})


module.exports = router