const db = require("../models")

module.exports = function (app) {
    // Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => res.json(err))
    })
    // post workout
    app.post("/api/workouts", ({ body }, res) => {
         db.Workout.create(body)
            .then(newWorkout => {
                res.json(newWorkout)
            })
            .catch(err => res.json(err))
    })
    // update posted workout
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.params.id)
        let body = req.body
        db.Workout.findByIdAndUpdate( req.params.id, {$push: {exercises: body} })
            .then(updateWorkouts => res.json(updateWorkouts))
            .catch(err => res.json(err))
    })
    // display workouts on stats page
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => res.json(err))
    })
}