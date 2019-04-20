var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('Static_Page'));
app.listen(8000);
console.log("Running on localhost")
