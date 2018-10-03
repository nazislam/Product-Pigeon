const passport = require('passport');
const { Strategy } = require('passport-local');

module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      usernameField: 'email',
      password: 'password'
    }, function(email, password, done) {
      const user = { email, password };
      done(null, user);
    }
  ))
}
