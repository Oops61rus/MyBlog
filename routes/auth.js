const express = require('express');
const router = express.Router();
const tokenService = require('../tokenCreator.js');

router.post('/sign-up', function (req, res) {
  const tokenDay = tokenService.tokenDay();
  const tokenYear = tokenService.tokenYear();
  res
  .cookie('jwtTokenDay', tokenDay, { domain: 'http://localhost:3000/auth/', httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000})
  .cookie('jwtTokenYear', tokenYear, { domain: 'http://localhost:3000/auth/', maxAge: 365 * 24 * 60 * 60 * 1000})
  .send('Sign Up page')
})
router.post('/sign-in', function (req, res) {
  res.send('Sign In page')
})

module.exports = router
