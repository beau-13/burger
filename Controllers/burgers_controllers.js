var express = require("express");
var app = express();
var burger = require("../models/burger")

app.get('/', function (req, res) {
    res.send('hello world2')
  })

