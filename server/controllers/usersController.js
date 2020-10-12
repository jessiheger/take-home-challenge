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


// Retrieve single user
exports.getByUserId = async (req, res) => {
  let id = req.params.id;
  knex('users')
    .where('id', id)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving user ID ${req.body.id}: ${err}` })
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
      'fulfilled': false,
    })
    .then(data => {
      // Send a success message in response
      res.status(201).json({status: 'CREATED', id : data[0] });
      // res.json({ data: `${data}` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating a new order: ${err}` })
    })
}

//TO DO
// router.patch('/api/magic', usersRoutes.updateFulfilled)
exports.updateFulfilled = async (req, res) => {
  knex('users')
    .where('id', req.body.id)
    .update({fulfilled: `${req.body.fulfilled}`}, ['id', 'fulfilled'])
    .then( () => {
      res.json({message: `User ID ${req.body.id}'s order fulfilled status set to ${req.body.fulfilled === 1 ? true : false }`})
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error updating user ID ${req.body.id}'s order: ${err}` })
    })
}


// Remove specific user
exports.deleteUser = async (req, res) => {
  // Find specific user in the database and remove it
  let id = req.params.id;
  knex('users')
    .where('id', id)
    .del()
    .then(() => {
      // Send a success message in response
      res.json({ message: `User ID: ${id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting user (ID: ${id}): ${err}` })
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