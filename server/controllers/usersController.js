const knex = require('../db')

// Retrieve all users
exports.getUsers = async (req, res) => {
  knex
    .select('*')
    .from('users')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.status(404)
      res.json({ message: `Resource not found: ${err}` })
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
      res.status(404);
      res.json({ message: `Resource not found: ${err}` })
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
    .then( data => {
      res.status(201);
      res.json({ id: `${data}` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating a new order: ${err}` })
    })
}

exports.updateFulfilled = async (req, res) => {
    const id = req.body.id;
    const fulfilled = req.body.fulfilled
  knex('users')
    .where('id', id)
    .update({fulfilled: `${fulfilled}`}, ['id', 'fulfilled'])
    .then( () => {
      res.status(204);
      res.json({message: `Resource updated successfully`})
    })
    .catch(err => {
      res.status(404);
      res.json({ message: `Resource not found: ${err}` })
    })
}


// Remove specific user
exports.deleteUser = async (req, res) => {
  let id = req.params.id;
  knex('users')
    .where('id', id)
    .del()
    .then(() => {
      res.status(204);
      res.json({message: `Resource deleted successfully`})
    })
    .catch(err => {
      res.status(404);
      res.json({ message: `Resource not found: ${err}` })
    })
}

// Remove all users on the list
exports.resetUsers = async (req, res) => {
  knex
    .select('*')
    .from('users')
    .truncate()
    .then(() => {
      res.json({ message: 'User list cleared.' })
    })
    .catch(err => {
      res.json({ message: `There was an error deleting user list: ${err}.` })
    })
}