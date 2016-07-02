var db = require('../db');
var messagesArray = [];
var userId = 1;
var roomId = 2;

module.exports = {
  messages: {
    get: function (callback) {
      if (roomId === 1) {

        db.connection.query('SELECT messages.time AS date, messages.text, users.name AS username, rooms.name AS roomname FROM messages, users, rooms WHERE messages.room = rooms.Id AND messages.user = users.Id;', function(err, rows) {
          if (err) { console.log('asdfasdfa'); throw err; }
          // console.log(rows)
          console.log('if statment', rows);

          callback(rows);
        });
      } else {
        db.connection.query('SELECT messages.time AS date, messages.text, users.name AS username, rooms.name AS roomname FROM messages, users, rooms WHERE (rooms.name = ? AND messages.room = rooms.Id AND messages.user = users.Id) ;', [roomId], function(err, rows) {
          
          if (err) { console.log('asdfasdfa'); throw err; }
          console.log('else statment',rows);

          callback(rows);
        });
      }


    }, // a function which produces all the messages
    post: function (textWeEnter) { // a function which can be used to insert a message into the database

      var messageEntry = {text: textWeEnter, time: 1, user: userId, room: roomId};
      db.connection.query('INSERT INTO messages SET ?', messageEntry, function(err, res) {
        if (err) { throw err; }

        console.log('Last insert ID:', res.insertId);
      });
    }
  },

  users: {
    get: function() {

    },
    post: function (username) {

      var usernameEntry = {name: username};

      db.connection.query(' SELECT name FROM users', function(err, rows) {
        if (err) { throw err; }

        var usernamesArray = rows.map(function(row) {
          return row.name; 
        });

        if (usernamesArray.indexOf(username) === -1) {
          db.connection.query('INSERT INTO users SET ?', usernameEntry, function(err, res) {
            if (err) { throw err; }

            db.connection.query(' SELECT Id FROM users WHERE name = ?', [username], function(err, rows) {
              if (err) { throw err; }
              userId = rows[0].Id;
            });

          });

        } else {

          db.connection.query(' SELECT Id FROM users WHERE name = ?', [username], function(err, rows) {
            if (err) { throw err; }            
            userId = rows[0].Id;
          });
        }    
      });

    }
  },

  rooms: {
    get: function() {

    },
    post: function (roomname) {

      var roomnameEntry = {name: roomname};

      db.connection.query(' SELECT name FROM rooms', function(err, rows) {
        if (err) { throw err; }

        var roomnamesArray = rows.map(function(row) {
          return row.name; 
        });

        if (roomnamesArray.indexOf(roomname) === -1) {
          db.connection.query('INSERT INTO rooms SET ?', roomnameEntry, function(err,res) {
            if (err) { throw err; }

            db.connection.query(' SELECT Id FROM rooms WHERE name = ?', [roomname], function(err, rows) {
              if (err) { throw err; }
              roomId = rows[0].Id;
            });

          });

        } else {

          db.connection.query(' SELECT Id FROM rooms WHERE name = ?', [roomname], function(err, rows) {
            if (err) { throw err; }            
            roomId = rows[0].Id;
          });
        }    
      });

    }
  },

};


module.exports.messagesArray = messagesArray;
