var db = require('../db');

var userId = null;
var roomId = null;






module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (textWeEnter) { // a function which can be used to insert a message into the database

    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      var usernameEntry = {name: username};
      db.connection.query('INSERT INTO users SET ?', usernameEntry, function(err,res){
        if(err) {throw err;}

        console.log('Last insert ID:', res.insertId);
      });
      db.connection.query(' SELECT Id FROM users WHERE name = ?', [username] ,function(err,rows){
        if(err) {throw err;}

        console.log('Data received from Db:\n');
        userId=rows[0].Id;
        
      });

    }
  },

  rooms: {
    get: function() {

    },
    post: function (roomname) {
      var roomnameEntry = {name: roomname};
      db.connection.query('INSERT IGNORE INTO rooms SET ?', roomnameEntry, function(err,res){
        if(err) {throw err;}

        console.log('Last insert ID:', res.insertId);
      });
      db.connection.query(' SELECT Id FROM rooms WHERE name = ?', [roomname] ,function(err,rows){
        if(err) {throw err;}

        console.log('Data received from Db:\n');
        roomId = rows[0].Id;
        
      });
    }
  }
};

