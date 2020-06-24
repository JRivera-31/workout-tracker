const db = require("../models")

module.exports = function (app) {
    // Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => res.json(err))
    })
}