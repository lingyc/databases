var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports

 var connection= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'chat'
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


// var employee = {name: 'kjhkjh' };
// connection.query('INSERT INTO users SET ?', employee, function(err,res){
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });



// connection.query('SELECT * FROM users',function(err,rows){
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

module.exports.connection = connection;