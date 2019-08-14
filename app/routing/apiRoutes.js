
var path = require('path');

// Pull in the characters
var friends = require('../data/friends');

// Export routes
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Add new match
    app.post('/api/friends', function (req, res) {
        var userAnswer = req.body;
        var userResponse = userAnswer.scores;

        // Friend match
        var matchName = '';
        var matchPic = '';
        var totalDifference = 80000; 

        // All friends
        for (var i = 0; i < friends.length; i++) {

            // What is the difference between each question
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }

            // Low difference
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchPic = friends[i].photo;
            }
        }

        // Push user
        friends.push(userAnswer);

        // Send response
        res.json({
          status: "OK",
          matchName: matchName,
            matchPic: matchPic
        });
    });
};