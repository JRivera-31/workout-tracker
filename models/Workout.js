const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      { 
      type: { type: String, required: "must say type" },
      name: { type: String, required: "must have a name" },
      duration: { type: Number, required: "must have a duration" },
      distance: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number } }
    ]
  },
  {
    toJSON: { virtuals: true }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, current) => {
    return total + current.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;