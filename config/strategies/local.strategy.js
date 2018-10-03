const passport = require('passport');
const { Strategy } = require('passport-local');
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'db01'
});

module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      usernameField: 'email',
      password: 'password'
    }, function(email, password, done) {
      console.log('email---->'+ email);
      console.log('password---->'+ password);
      let sql = "SELECT * FROM Users WHERE email='" + email + "'";
      let query = db.query(sql, email, function(err, result) {
        if (err) throw err;
        console.log('----result----');
        console.log(result);
        console.log(result[0].email);
        console.log(result[0].password);
        if (result[0].password === password) {
          var user = result[0];
          done(null, user);
        } else {
          done(null, false);
        }
      });
    }
  ))
}
