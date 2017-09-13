const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/ping', (req, res) => res.send('pong'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`Listening on ${port}`);