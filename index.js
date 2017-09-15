/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const githubStrategy = require('passport-github');

const app = express();
const port = process.env.PORT || 1337;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

if (process.env.NODE_ENV === 'production')
  app.use(morgan('combined'));
else
  app.use(morgan('dev'));

passport.use(new githubStrategy({
  clientID: '',
  clientSecret: '',
  callbackURL: ''
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//app.use(express.static(path.join(__dirname, 'client/build')));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api/ping', (req, res) => res.send('pong'));
app.get('/login', (req, res) => res.send('login'));
app.get('/auth/login', passport.authenticate('github'));
app.get('/api/auth/github', passport.authenticate('github', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('/');
});
app.get('/', (req, res) => {
  res.send(req.isAuthenticated());
});

// app.get('*', (req, res) => {
//   console.log(req.user);
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.listen(port, err => {
  if (err)
    console.log(err);
  else
    console.log(`Listening on port ${port}`);
});
