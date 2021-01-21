
const mysql = require('mysql')
const express = require('express')
const config = require('./config');

// Api path
apiPath = '/api/v1/company'

// Express
const app = express()
const port = 3000

// Establish database
// Config placed inside config.js, recommended to use .env files locally instead
const db = mysql.createConnection(config.development.database)

// Database connection
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

app.get(apiPath, (req, res) => {

  sqlStatement = 'SELECT * from company';

  db.query(sqlStatement, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
})


app.listen(port, () => {
  console.log(`Portfolio Backend listening at http://localhost:${port}`)
})
