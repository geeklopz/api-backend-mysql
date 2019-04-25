const express = require('express')
const routes = express.Router()


// Routes
// GET/POST/PUT/DELETE

routes.post('/', () => {
    console.log('Server ON')
})

module.exports = routes