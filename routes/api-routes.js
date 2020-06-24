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

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(newWorkout => {
                res.json(newWorkout)
            })
            .catch(err => res.json(err))
    })

    app.get("/api/workouts/:id", (req, res) => {
        db.Workout.findById({ id: req.params.id })
            .then(workout => res.json(workout))
            .catch(err => res.json(err))
    })
}