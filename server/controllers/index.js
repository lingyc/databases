var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      res.send({});



    }, // a function which handles a get request for all messages
    post: function (req, res) {

      collectData(req, function(data) {
        console.log(data);
        sendResponse(res, data);
      });
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
    console.log('allabout chunk:',typeof chunk,chunk);
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(JSON.stringify(data)));
  });
};