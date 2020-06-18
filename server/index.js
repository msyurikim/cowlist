//server
const express = require('express');
const app = express();
const db = require('../database/index');
const router = require('./routes');

//load router module in app, so it can handle requests to /cows
app.use('/cows', router);

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
