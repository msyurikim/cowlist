//database setup, do queries in server

const mysql = require('mysql');

//recommended way to establish connection to database
const connection = mysql.createConnection({
  //host: 'localhost',  //default
  //port: 3306, //default
  user: 'root',   //MySQL user
  password: '',   //password of MySQL user
  database: 'cowlist' //optional, name of database for this connection
  //To create a new MySQL user account, run the following command: CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'user_password';
});
connection.connect( err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');

});
//connection.connect() is implicitly established by invoking connection.query(...), after connection = createConnection

module.exports = connection;