var models = require('../models');

module.exports = {
  messages: {
    storage: [ ],
    get: function (req, res) {

      res.header(headers);
      res.set(200);
      res.send(
        {
          results: [{
          createdAt: '2001-02',
          roomname: 'cows',
          text: 'sdfsdsd',
          username: 'sdfsds'
        }]
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('sgp');
      console.log(req.body);
      models.messages.post(req.body.text);


      // collectData(req, function(data) {
      //   sendResponse(res, data);
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var collectData = function(request, callback) {
  
  var data = '';
  request.on('data', function(chunk) {
    console.log(43434324)
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(JSON.stringify(data)));
  });
};