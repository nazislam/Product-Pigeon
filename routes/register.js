const express = require('express');
const registerRouter = express.Router();
const passport = require('passport');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'db01'
});

registerRouter.route('/')
  .get(function(req, res) {
    res.render('register');
  })
  .post(function(req, res) {
    let data = req.body;
    console.log(data);
    let sql = 'INSERT INTO Users SET ?';
    let query = db.query(sql, data, function(err, result) {
      if (err) throw err;
      console.log(result);
      req.login(req.body, function() {
        // res.redirect('/register/profile');
      });
    });
  });

registerRouter.route('/signin')
  .get(function(req, res) {
    res.render('signin');
  })
  .post(passport.authenticate('local', {
    successRedirect: '/register/profile',
    failureRedirect: '/'
  }));

registerRouter.route('/profile')
  .get(function(req, res) {
    const user = req.user;
    res.render('profile', { email: user.email, password: user.password });
  });

module.exports = registerRouter;
