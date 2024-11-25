const express = require('express')
const router = express.Router()
const crudProductos = require('../data/crud.productos')

router.get('/', async (req, res) => {
    const productos = await crudProductos.leerProductos()
    res.render('home', {
        layout: 'index',
        productos: productos,
        titulo: 'Home',
    })
})

router.get('/menu', async (req, res) => {
    res.render('menu', {
        layout: 'index',
        titulo: 'Menú',
    })
})

router.get('/promociones', async(req, res) => {
    const productosPromocion = await crudProductos.getPromociones()
    res.render('promociones', {
        layout: 'index',
        titulo: 'Promociones',
        promociones: productosPromocion,
    })
})

router.get('/carrito', (req, res) => {
    res.render('carrito', {
        layout: 'index',
        titulo: 'Carrito',
    })
})

router.get('/contacto', (req, res) => {
    res.render('contacto', {
        layout: 'index',
        titulo: 'Contacto',
    })
})
router.post('/contacto', (req, res) => {
    res.render('gracias', {
        layout: 'index',
        titulo: 'Contacto',
    })
})

module.exports = router