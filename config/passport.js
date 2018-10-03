const passport = require('passport');

module.exports = function passportConfig(app) {
  require('./strategies/local.strategy')();

  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
