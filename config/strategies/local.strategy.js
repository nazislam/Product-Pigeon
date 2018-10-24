const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'db01'
});

const verifyAdvertiser = function localStrategy() {
  passport.use('local', new LocalStrategy(
    {
      usernameField: 'email',
      password: 'password'
    }, function(email, password, done) {
      console.log('email---->'+ email);
      console.log('password---->'+ password);
      console.log('checking advertiser');
      let sql = "SELECT * FROM Advertiser WHERE email='" + email + "'";
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
};

const verifyProductOwner = function localStrategy() {
  passport.use('local2', new LocalStrategy(
    {
      usernameField: 'email',
      password: 'password'
    }, function(email, password, done) {
      console.log('email---->'+ email);
      console.log('password---->'+ password);
      console.log('checking productowner');
      let sql = "SELECT * FROM ProductOwner WHERE email='" + email + "'";
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
};

module.exports = { verifyAdvertiser, verifyProductOwner };
