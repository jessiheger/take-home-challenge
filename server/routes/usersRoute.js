// Import express
const express = require('express')

// Import users controller
const usersRoutes = require('../controllers/usersController.js')

// Create router
const router = express.Router()

router.get('/all', usersRoutes.getUsers)

router.get('/:id', usersRoutes.getByUserId)

router.post('/', usersRoutes.createUser)

router.patch('/', usersRoutes.updateFulfilled)

router.delete('/:id', usersRoutes.deleteUser)

router.put('/reset', usersRoutes.resetUsers)


module.exports = router