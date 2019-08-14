
var path = require('path');

// Pull in the characters
var friends = require('../data/friends.js');

// Export routes
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Add new match
    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;

        // Friend match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 80000; 

        // All friends
        for (var i = 0; i < friends.length; i++) {

            // What is the difference between each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            // Low difference
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        // Push user
        friends.push(userInput);

        // Send response
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
    });
};