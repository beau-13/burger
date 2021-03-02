var express = require("express");
var mysql = require("mysql");
const { config } = require("process");

const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    passowrd: "Kobiejo1",
    database: "burgers_db",
    port: "3306"
})

connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log("connected")
    }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port" + port)

module.exports = connection