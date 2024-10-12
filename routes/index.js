// ./routes/index.js
const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

// Define your routes here
router.get('/', (req, res) => {
  //#swagger.tags=['Hello World']
  res.send('Hello World!');
});

router.use('/users', require('./users'));

// Export the router
module.exports = router;