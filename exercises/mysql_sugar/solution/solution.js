var express = require('express')
var app = express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.argv[3],
  database     : process.argv[4],
  user     : process.argv[5],
  password : process.argv[6]
});

app.get('/users', function(req, res) {
    connection.connect();

    connection.query('SELECT * FROM users', function(err, rows, fields) {
      if (err) throw err;
      
      var users = [];
      for(var i = 0; i < rows.length; i++) {
          users.push({
              id: rows[i].id,
              name: rows[i].name
          });
      }
      res.send(users);
    });

    connection.end();
})
app.listen(process.argv[2])