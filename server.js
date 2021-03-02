var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

// Set View Folder
app.set('views', path.join(__dirname, 'views'));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// ToDo APp Start
app.get('/', function (req, res) {
    res.send('Hello World');
});
// ToDo APp End

// Run the Server
app.listen('3000', function () {
    console.log('Server is running at PORT ' + 3000);
    // add console log statements for 1. controller 2. domain 3. dal
});