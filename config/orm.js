let connection = require("connection.js");

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(tableName, name, cb) {
    var queryString = "INSERT INTO ?? (name) VALUES(?)";
    connection.query(queryString, [tableName, name], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableName, id, cb) {
    var queryString = "UPDATE ?? SET (devoured) WHERE id = ?";
    connection.query(queryString, [tableName, id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;