// requiring npm packages-----------
const express = require("express");

// Requiring db connection----------
const { connectToDb, getDb } = require("./db");

// innicliz express app to use express class
const app = express();

let db
//db connection
connectToDb((err) => {
  if (!err) {
    // to liston requist of our app on port 3000
    app.listen(3000, () => {
      console.log("Server started on port no 3000");
    }); 
    db = getDb()
  }
});

// Setting up a get requist heandler
app.get("/", (req, res) => {
    db.collection("books")
  res.json({ message: "Welcome to the mongo api" });
});
