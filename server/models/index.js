var db = require('../db');









module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (textWeEnter) { // a function which can be used to insert a message into the database

   
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      var employee = {name: 'asdfasdf'};
      db.connection.query('INSERT INTO users SET ?', employee, function(err,res){
        if(err) throw err;

        console.log('Last insert ID:', res.insertId);
      });

      db.connection.query('SELECT * FROM users',function(err,rows){
        if(err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
      });

    }
  }
};

