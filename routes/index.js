// ./routes/index.js
const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/users', require('./users'));

// Export the router
module.exports = router;