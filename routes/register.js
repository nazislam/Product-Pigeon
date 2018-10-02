const express = require('express');
const registerRouter = express.Router();

registerRouter.route('/')
  .get(function(req, res) {
    res.send('in register get');
  })
  .post(function(req, res) {
    res.send('in register post');
  })


module.exports = registerRouter;
