const express = require('express');

const router = express.Router()

//Post Method
router.get('/home', (req, res) => {
  res.send('test')
})

module.exports = router;