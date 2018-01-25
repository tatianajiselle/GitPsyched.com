const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;

// Connect mongoose to our database
const config = require('./config/database');
mongoose.connect(config.database);