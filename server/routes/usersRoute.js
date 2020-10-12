// Import express
const express = require('express')

// Import users controller
const usersRoutes = require('../controllers/usersController.js')

// Create router
const router = express.Router()

router.get('/all', usersRoutes.getUsers)

router.get('/:id', usersRoutes.getByUserId)

router.post('/create', usersRoutes.createUser)

router.patch('/api/magic', usersRoutes.updateFulfilled)

router.put('/delete', usersRoutes.deleteUser)

router.put('/reset', usersRoutes.resetUsers)


module.exports = router