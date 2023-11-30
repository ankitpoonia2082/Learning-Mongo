// DataBase connection Code file

const { MongoClient } = require("mongodb");

let dbConnection;

// Creating 2 functions in a object

//this object contains 2 properties (setconnection & getconnection) and exports it using export module
module.exports = {
  // 1st Property : set connection
  connectToDb: (cb) => {
    //It takes a connection string which contains port and db name
    // its a async task and takes time and returns a promise
    MongoClient.connect("mongodb://localhost:27017/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return cb()
      })
      .catch((err) => {
        console.log(err);
        return cb(err)
      });
  },

  // 2nd Property : get connection
  // It will allow us to communicate to our Db (CURD)
  getDb: () => dbConnection
};
