// Database
const mongoose = require('mongoose')
const dbName = 'supa-project'
mongoose.connect(`mongodb://localhost/${dbName}`)

// Model
const Product = require('../models/product.model')
const User = require('../models/user.model')

// Data

const products = [{
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Coliflor',
        description: 'Producto envasado y biológico con denominación de origen Madriz.',
        price: 2.80
    },
    {
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Brocoli',
        description: 'Producto fresco con ningún tipo de traza animal.',
        price: 2.80
    },
    {
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Zanahoria',
        description: 'Producto fresco, limpio y preparado.',
        price: 2.80
    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Tomate',
        description: 'Producto de Málaga. 100% ecológico.',
        price: 0.99
    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Pepino',
        description: 'Producto solo de uso alimentario. No usar como producto sexual',
        price: 2.22
    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Espárragos',
        description: 'Producto de la tierra. Aranjuez para ser exactos.',
        price: 2.30
    },
    {
        category: 'verdura y hortaliza',
        type: 'otras verduras y hortalizas',
        name: 'Patata',
        description: 'Producto de Galicia, una buena tortilla te podrás hacer.',
        price: 1.99
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Arándanos',
        description: 'Producto rico rico, importado de Canadá.',
        price: 1.99
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Mora',
        description: 'Producto recogido en las zarzas de la abuela Carmen.',
        price: 3.99
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Frambuesa',
        description: 'Producto que combina con tus gin tonics.',
        price: 2
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Naranja',
        description: 'Producto Valenciano. 100% Español.',
        price: 1.48
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Mandarina',
        description: 'Producto Valenciano. No son de importación',
        price: 1.59
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Kiwi',
        description: 'Producto cítrico, pero sabroso y dulce.',
        price: 1.68
    },
    {
        category: 'fruta',
        type: 'otras frutas',
        name: 'Platano',
        description: 'Producto para comer en tu día a día.',
        price: 1.50
    },
]


// Seed
Product.create(products)
    .then(allTheProducts => {
        console.log(`Created ${allTheProducts.length} products`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the products', err))