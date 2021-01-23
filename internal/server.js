
const config = require('./config');
const mysql = require('mysql')
const express = require('express')
const { response } = require('express');

// Api path
apiPath = '/api/v1/'

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

// gets a list of companies from the api
app.get(apiPath + 'company', (req, res) => {
  sqlStatement = 'SELECT * from company';

  db.query(sqlStatement, (err, results) => {
    if (err) throw err;

    // response
    console.log(results);
    res.send(results);
  });
})

// Cache control for get API
app.get(apiPath + 'company-cached', (req, res) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');

  sqlStatement = 'SELECT * from company';

  db.query(sqlStatement, (err, results) => {
    if (err) throw err;

    // response
    console.log(results);
    res.send(results);
  });
})


app.listen(port, () => {
  console.log(`Portfolio Backend listening at http://localhost:${port}`)
})
