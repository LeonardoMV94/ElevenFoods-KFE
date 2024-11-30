const path = require('node:path')
const express = require('express')
const expbs = require('express-handlebars')
// importacion de rutas
const routes = require('./controllers/routes')
// configuracion de variables de entorno
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// Sending static files with Express  comment
app.use('/public', express.static(path.join(__dirname, '/public')))

const hbs = expbs.create({
  defaultLayout: 'home',
  layoutsDir: path.join(__dirname, '/views/layouts'), // capeta de layout
  partialsDir: path.join(__dirname, '/views/partials'), // carpeta de partials
  extname: '.hbs',
  // helpers
  helpers: {
    isActive: (currentPath, linkPath) => currentPath === linkPath ? 'active' : ''
  }
})

// Express Handlebars Configuration
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// middlewares
app.use(express.json())

// Middleware para agregar currentPath y year a todas las vistas
app.use((req, res, next) => {
  res.locals.currentPath = req.path
  res.locals.year = new Date().getFullYear()
  next()
})

app.use((req, res, next) => {
  console.log(`Solicitud entrante: ${req.method} ${req.url}`)
  next()
})

// Configure Routes
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is starting in http://localhost:${port}/`)
})
