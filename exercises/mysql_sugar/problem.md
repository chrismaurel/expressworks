Create an Express.js app that outputs the result of a MySQL request when somebody goes to `/users`.

The port number will be provided to you by {appname} as the first argument of
the application, i.e., `process.argv[2]`.

Don't forget to install the MySQL module if you haven't already.

```
$ npm install mysql
```

-----------------------------

## HINTS

This is how we can connect to a MYSQL server

```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
```

In your solution, please use `process.argv[3]` as the database, `process.argv[4]` as the host, 
`process.argv[5]` as the user, `process.argv[6]` as the password

