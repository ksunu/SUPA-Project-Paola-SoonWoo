const express = require('express')
const router = express.Router()
const multer = require('multer')

const User = require("./../models/user.model")
const Picture = require('../models/picture.model')

// File upload settings
const uploadLocal = multer({
    dest: './public/uploads/'
})


// Local upload files routes
router.get('/upload-local', (req, res, next) => res.render('private/files/upload-form', {
    user: req.user
}))

router.post('/upload-local', uploadLocal.single('imageFile'), (req, res, next) => {

    console.log("Archivo local:", req.file)

    // Validador
    req.file.size < 3000000 ? next() : console.log('La imagen es demasiado grande')

    Picture.create({
            name: req.body.imageName,
            path: `/uploads/${req.file.filename}`,
            originalName: req.file.originalname
        })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


// CDN file upoloads routs

const cloudUploader = require('../configs/cloudinary.config')

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


// Subida de archivos al servidor para el avatar
router.get('/upload-avatar', (req, res, next) => res.render('clients/edit-form', {
    user: req.user
}))

router.post('/upload-avatar', uploadLocal.single('imageFile'), (req, res, next) => {

    console.log("Archivo local:", req.file)

    // Validador
    req.file.size < 3000000 ? next() : console.log('La imagen es demasiado grande')

    Picture.create({
            name: req.body.imageName,
            path: `/uploads/${req.file.filename}`,
            originalName: req.file.originalname
        })
        .then(() => res.redirect('/client/profile'))
        .catch(err => next(new Error(err)))
})


/////---EXPORT---//////
module.exports = router