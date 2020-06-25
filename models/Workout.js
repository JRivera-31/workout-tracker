const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define schema
const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      { 
      type: { type: String, required: "Must include a type of exercise!" },
      name: { type: String, required: "Must include a name!" },
      duration: { type: Number, required: "Must have a duration!" },
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
// Calculate duration with a virtual
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, current) => {
    return total + current.duration;
  }, 0);
});
// assign model
const Workout = mongoose.model("Workout", WorkoutSchema);
// export model
module.exports = Workout;