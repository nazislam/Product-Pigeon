const express = require('express');
const registerRouter = express.Router();
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
      res.send('in register post');
    });
  });


module.exports = registerRouter;
