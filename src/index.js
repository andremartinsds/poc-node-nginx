const mysql = require("mysql");
const express = require("express");
const app = express();

const port = 3000;

const config = {
  host: 'db',
  port: '3306',
  user: 'root',
  password: 'docker',
  database:'nodedb'
};

const myConection = mysql.createConnection(config);

app.get("/create", (req, res) => {
  const sql = `INSERT INTO people(name) values('André')`
  myConection.query(sql);
  myConection.end();
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(port, () => {
  console.log("run =>", port);
});
