/**
 * Example controller
 */

/**
 * Initialize express instance and router 
 * use 'router' instead of 'app'.
 */
const express = require('express');
const router = express.Router();

/**
 * your_site/welcome/
 */
router.get('/', (req, res) => {
  req.session.test = 'Hi';
  res.render('welcome', {
    hello: 'Hi Codeigniter.js ;D'
  });
});

/**
 * DONT FORGET TO EXPORT 'router'
 */
module.exports = router;