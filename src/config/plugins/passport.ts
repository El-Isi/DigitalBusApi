import LoginUserUseCase from '../../users/useCases/users/LoginUserUseCase';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Generate a passport strategy
 passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]'
    },
    (username, password, done) => {
      const loginUserUseCase = new LoginUserUseCase();
      loginUserUseCase
        .exec(username, password)
        .then(user =>  done(null, user))
        .catch(e => done(e));
    }
  )
);