const db = require('../database/index');
// source: https://expressjs.com/en/guide/routing.html
// Router class creates modular, mountable route handlers
// Router = "mini-app" with complete middleware + routing system
const router = require('express').Router();

//define route for handling get methods at /cows --> declared in server
router.get('/', (req, res, next) => {
  // SELECT [column], [another-column] FROM [table];
  var query = 'SELECT name, description FROM cows';
  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);  //not found
    } else {
      //https://www.tutorialspoint.com/difference-between-res-send-and-res-json-in-express-js
      //res.send: client treats res as text
      //res.json: client treats res as json object
      //The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.
      //res.json(results);  //if below breaks use this
      res.send(results);
    }
  });
});

//define route for handling post methods at /cows --> declared in server
router.post = ('/', (req, res, next) => {
  // Inserting a record: INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');
  var query = ('INSERT INTO cows(name, description) \
          VALUE (? ?)');
  //.query(sqlString, values, callback)
  //callback in form of (err, results, fields)
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any); fields = properties of table
  //req.body = object = {name: 'Milkshake', description: '...'}
  db.query(query, [req.body.name, req.body.description], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      //results.insertId = id of last inserted record/entry
      //SELECT * FROM [table] WHERE [column] = [value];
      db.query('SELECT name, description FROM cows WHERE id = results.insertId', (err, results) => {
        if (err) {
          console.log(err);
          res.sendStatus(404);
        } else {
          res.send(results);
        }
      });
    }
  });
});

module.exports = router;