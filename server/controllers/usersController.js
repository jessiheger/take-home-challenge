// Import database
const knex = require('../db')

// Retrieve all users
exports.getUsers = async (req, res) => {
  // Get all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new user
exports.createUser = async (req, res) => {
  knex('users')
    .insert({
      'firstName': req.body.firstName,
      'lastName': req.body.lastName,
      'email': req.body.email,
      'street1': req.body.street1,
      'street2': req.body.street2,
      'city': req.body.city,
      'state': req.body.state,
      'zip': req.body.zip,
      'phone': req.body.phone,
      'ccNum': req.body.ccNum,
      'exp': req.body.exp,
      'quantity': req.body.quantity,
      'total': req.body.total,
      'orderDate': Date.now(),
      'fulfilled': req.body.fulfilled,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Order submitted for ${req.body.firstName} ${req.body.lastName}!` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.firstName} ${req.body.lastName} user: ${err}` })
    })
}

// Remove specific user
exports.deleteUser = async (req, res) => {
  // Find specific user in the database and remove it
  knex('users')
    .where('id', req.body.id)
    .del()
    .then(() => {
      // Send a success message in response
      res.json({ message: `User ${req.body.firstName} ${req.body.lastName} (ID: ${req.body.id}) deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.firstName} ${req.body.lastName} (ID: ${req.body.id}) user: ${err}` })
    })
}

// Remove all users on the list
exports.resetUsers = async (req, res) => {
  // Remove all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'User list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting user list: ${err}.` })
    })
}