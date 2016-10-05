var express = require('express')
var app = express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  database     : process.argv[3],
  host     : process.argv[4],
  user     : process.argv[5],
  password : process.argv[6]
});

app.get('/users', function(req, res) {
    connection.connect();

    connection.query('SELECT * FROM users', function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    });

    connection.end();
})
app.listen(process.argv[2])