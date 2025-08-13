const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "rootpassword",
  database: "testdb"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

app.get("/", (req, res) => {
  db.query("SELECT NOW() as time", (err, results) => {
    if (err) throw err;
    res.json({ message: "Backend is running!", time: results[0].time });
  });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});