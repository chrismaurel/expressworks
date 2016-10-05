var express = require('express')
var app = express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.argv[3],
  user     : process.argv[4],
  password : process.argv[5]
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