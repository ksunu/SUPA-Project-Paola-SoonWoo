// Database
const mongoose = require('mongoose')
const dbName = 'supa-project'
mongoose.connect(process.env.DB_LOCAL)

// Model
const Product = require('../models/product.model')
const User = require('../models/user.model')
const Store = require('../models/store.model')

// Data

const products = [{
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Coliflor',
        description: 'Producto envasado y biológico con denominación de origen Madriz.',
        price: 2.80,
        img: 'https://images.unsplash.com/photo-1589719305657-2401ef017d27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    {
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Brocoli',
        description: 'Producto fresco con ningún tipo de traza animal.',
        price: 2.80,
        img: 'https://images.unsplash.com/photo-1553175005-a1129d5c188c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2257&q=80'
    },
    {
        category: 'verdura y hortaliza',
        type: 'hortaliza',
        name: 'Zanahoria',
        description: 'Producto fresco, limpio y preparado.',
        price: 2.80,
        img: 'https: //images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'

    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Tomate',
        description: 'Producto de Málaga. 100% ecológico.',
        price: 0.99,
        img: 'https://images.unsplash.com/photo-1588961621406-31a5fdabb0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Pepino',
        description: 'Producto solo de uso alimentario. No usar como producto sexual',
        price: 2.22,
        img: 'https://images.unsplash.com/photo-1589621316382-008455b857cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'verdura y hortaliza',
        type: 'verdura',
        name: 'Espárragos',
        description: 'Producto de la tierra. Aranjuez para ser exactos.',
        price: 2.30,
        img: 'https://images.unsplash.com/photo-1519590350802-eb212e2ea536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'verdura y hortaliza',
        type: 'otras verduras y hortalizas',
        name: 'Patata',
        description: 'Producto de Galicia, una buena tortilla te podrás hacer.',
        price: 1.99,
        img: 'https://images.unsplash.com/photo-1580391564629-d95e06fc9699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Arándanos',
        description: 'Producto rico rico, importado de Canadá.',
        price: 1.99,
        img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Mora',
        description: 'Producto recogido en las zarzas de la abuela Carmen.',
        price: 3.99,
        img: 'https://images.unsplash.com/photo-1535189300394-0ea3bb61ceb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'fruto rojo',
        name: 'Frambuesa',
        description: 'Producto que combina con tus gin tonics.',
        price: 2,
        img: 'https://images.unsplash.com/photo-1580823673230-c0a539d4c003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Naranja',
        description: 'Producto Valenciano. 100% Español.',
        price: 1.48,
        img: 'https://images.unsplash.com/photo-1579969653892-c3cc5f24535a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Mandarina',
        description: 'Producto Valenciano. No son de importación',
        price: 1.59,
        img: 'https://images.unsplash.com/photo-1549488933-2392c609e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'Citrico',
        name: 'Kiwi',
        description: 'Producto cítrico, pero sabroso y dulce.',
        price: 1.68,
        img: 'https://images.unsplash.com/photo-1554118879-2bdb1885305d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        category: 'fruta',
        type: 'otras frutas',
        name: 'Platano',
        description: 'Producto para comer en tu día a día.',
        price: 1.50,
        img: 'https://images.unsplash.com/photo-1526364163643-89e30b8fcb70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
]


// Seed
Product.create(products)
    .then(allTheProducts => {
        console.log(`Created ${allTheProducts.length} products`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the products', err))