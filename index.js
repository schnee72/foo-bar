/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());

if (process.env.NODE_ENV === 'production')
  app.use(morgan('combined'));
else
  app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/ping', (req, res) => res.send('pong'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, err => {
  if (err)
    console.log(err);
  else
    console.log(`Listening on port ${port}`);
});
