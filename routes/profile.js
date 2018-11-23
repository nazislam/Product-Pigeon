const express = require('express');
const profileRouter = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'db01'
});

profileRouter.route('/edit')
  .get((req, res) => {
    res.json({message: 'in profile edit route get'});
  })
  .post((req, res) => {
    console.log('on profile edit');
    let user = req.body;
    console.log('updated user: ', user);
    let email = user.email; let password= user.password;
    let id = user.id;
    let picture = user.picture;
    console.log('picture:::-', picture);
    let sql = `UPDATE User SET email = ?, password = ?, picture = ? where id=?`;
    let data = [email, password, picture, id];
    let query = db.query(sql, data, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({message: 'updated user information'});
    });
  });


module.exports = profileRouter;
