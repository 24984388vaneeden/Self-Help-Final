var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var exercise = require('./Exercise');

// CREATES A NEW EXERCISE
router.post('/', function (req, res) {
  exercise.create({
    name : req.body.name,
    displayname : req.body.displayname,
    date : req.body.date,
    completed: req.body.completed
  },
 function (err, exercise) {
    if (err) return res.status(500).send("There was a problem adding the information to the database.");
       res.status(200).send(exercise);
    });
});

// RETURNS ALL THE EXERCISES IN THE DATABASE
router.get('/', function (req, res) {
    exercise.find({}, function (err, exercises) {
        if (err) return res.status(500).send("There was a problem finding the daily exercises.");
        res.status(200).send(exercises);
    });
});

// GETS A SINGLE EXERCISE FROM THE DATABASE
router.get('/:id', function (req, res) {
    exercise.findById(req.params.id, function (err, exercise) {
        if (err) return res.status(500).send("There was a problem finding the exercise.");
        if (!exercise) return res.status(404).send("No exercise found.");
        res.status(200).send(exercise);
    });
});

// DELETES A EXERCISE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    exercise.findByIdAndRemove(req.params.id, function (err, exercise) {
        if (err) return res.status(500).send("There was a problem deleting the exercise.");
        res.status(200).send("Exercise: "+ exercise.displayname +" was deleted.");
    });
});

// UPDATES A SINGLE EXERCISE IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
   exercise.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, exercise) {
        if (err) return res.status(500).send("There was a problem updating the Exercise.");
        res.status(200).send(exercise);
    });
});


module.exports = router;