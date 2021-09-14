const mysql = require("mysql");
const express = require("express");
var faker = require('faker');
const app = express();

const port = 3000;

const config = {
  host: "db",
  port: "3306",
  user: "root",
  password: "docker",
  database: "nodedb",
};

const myConection = mysql.createConnection(config);

app.get("/", async (req, res) => {
  const sql = `INSERT INTO people(name) values('${faker.name.firstName()}')`;
  await myConection.query(sql);
  const selectPeople = `SELECT * FROM people`;

  const initTable =
    "<h1>Full Cycle Rocks!</h1> <br> <hr> <table><tr><th>#ID</th><th>name</th>";
  await myConection.query(selectPeople, function (err, peoples) {
    if(err) {
      res.send("<h1>Full Cycle Rocks!</h1>");
      return;
    }
    const peopleSelected = peoples.reduce((add, p) => {
      return add + `<tr><td>${p.id}</td><td>${p.name}</td></tr>`;
    }, "");
    const endTable = "</tr></table>";
    res.send(initTable + peopleSelected + endTable);
  });
  return;
});

app.listen(port, () => {
  console.log("run =>", port);
});
