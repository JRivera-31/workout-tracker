const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },

    exercies: [     
        {
            type: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]

},
    {
        toJSON: {
            virtuals: true    
        }
    })

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercies.reduce((total, current) => {
        return total + current.duration
    }, 0)
})



const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout