// Import express
const express = require('express')

// Import users controller
const usersRoutes = require('../controllers/usersController.js')

// Create router
const router = express.Router()

router.get('/all', usersRoutes.getUsers)

router.get('/:id([0-9]+)', usersRoutes.getByUserId)

router.post('/', usersRoutes.createUser)

router.put('/', usersRoutes.updateFulfilled)

router.delete('/:id([0-9]+)', usersRoutes.deleteUser)

router.put('/reset', usersRoutes.resetUsers)


module.exports = router