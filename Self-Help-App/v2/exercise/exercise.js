let mongoose = require('mongoose');
let ExerciseSchema = new mongoose.Schema({
    name: String,
    displayname: String,
    date: date,
    completed: boolean
});

mongoose.model('Exercise',ExerciseSchema);

module.exports = mongoose.model('Exercise');