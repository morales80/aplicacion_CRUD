var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/apps', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('usuarios').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

module.exports = MongoClient;