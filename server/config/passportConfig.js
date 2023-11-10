const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel.js');

passport.use(
  new GoogleStrategy({

    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/api/user/google/callback',

  }, async (accessToken, refreshToken, profile, done) => {

  try {

    let user = await User.findOne({ email: profile.emails[0].value });

    if (user) {

      return done(null, user);

    } else {

      user = await User.create({

        email: profile.emails[0].value,
        displayName: profile.displayName,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });

      return done(null, user);

    }
  } catch (error) {

    return done(error, null);

  };
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);

  } catch (error) {

    done(error, null);

  };
});
