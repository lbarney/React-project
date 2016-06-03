var LocalStrategy = require('passport-local').Strategy; //Call in local passport -- lookup local Strategy
var User = require('./../models/userModel.js');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {//serialize
        console.log("USER", user);
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {//deserialize
        console.log("ID", id);
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({//use local-signup
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        process.nextTick(function() {
          User.findOne({'email': email}, function(err, user) { //find by email
              if (err) return done(err);
              if (user) {
                if (user.validPassword(password)) {
                  console.log('worksgood');
                    return done(null, user);
                } else {
                  console.log('Invalid email or password');
                    return done(null, false);
                }
              } else {
                  var newUser = new User(req.body); //register new user
                  newUser.email    = email;
                  newUser.password = newUser.generateHash(password); //hash password
                  newUser.save(function(err) {
                      if (err) throw err;
                      return done(null, newUser);
                  });
              }
          });
        });
    }));
};
