// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Connect to CSS 
app.use(express.static(path.join(__dirname, '../FriendFinder/app/public')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
require(path.join(__dirname, '../FriendFinder/app/routing/apiRoutes'))(app);
require(path.join(__dirname, '../FriendFinder/app/routing/htmlRoutes'))(app);

app.listen(PORT, function () {
    console.log('Listening on PORT: ' + PORT);
});