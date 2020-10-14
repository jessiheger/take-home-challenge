// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path');

// Import routes
const userRouter = require('./routes/usersRoute')

// Set default port for express app
const PORT = process.env.PORT || 4001

// Create express app
const app = express()

const publicPath = path.join(__dirname, '..', 'src');


// Apply middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(publicPath));

app.get('/', (req, res, next) => {
    res.render('index')
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Implement users route
app.use('/api/magic', userRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is broken.')
})

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send('Sorry we could not find that.')
})

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})

module.exports = app;