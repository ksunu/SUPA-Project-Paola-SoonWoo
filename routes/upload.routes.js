const express = require('express')
const router = express.Router()
const multer = require('multer')

const User = require("./../models/user.model")
const Picture = require('../models/picture.model')

// CDN file upoloads routs

const cloudUploader = require('../configs/cloudinary.config')
const cloudUploaderClient = require('../configs/cloudinary.config')

// GALLERY
router.get('/upload-cdn', (req, res, next) => res.render('private/files/upload-form'))

router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

    console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

    Picture.create({
            name: req.body.imageName,
            path: req.file.url,
            originalName: req.file.originalname
        })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


// AVATAR PHOTO UPLOAD
router.get('/upload-avatar', (req, res, next) => res.render('clients/edit-form'))

router.post('/upload-avatar', cloudUploaderClient.single('imageFile'), (req, res, next) => {

    Picture.create({
            name: req.body.imageName,
            path: req.file.url,
            originalName: req.file.originalname
        })
        .then(() => res.redirect('/client/profile'))
        .catch(err => next(new Error(err)))

    const avatar = req.file.url
    User.findByIdAndUpdate(req.query.userId, {
            avatar
        }, {
            new: true
        })
        .then(() => res.redirect(`/client/profile/${req.query.userId}`))
        .catch(err => next(err))
})


/////---EXPORT---//////
module.exports = router