// Dependencies
var path = require('path');

// Export routes
module.exports = function (app) {

    // Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/FriendFinder/app/public/home.html'));
    });

    // Survey 
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/FriendFinder/app/public/survey.html'));
    });
};