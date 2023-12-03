const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const projectSchema = new Schema(
    {
        name: {type: String, required: true},
        //ref: is to Pattern (or Material) model
        pattern: [{type: Schema.Types.ObjectId, ref: 'Pattern'}],
        material: [{type: Schema.Types.ObjectId, ref: 'Material'}]
    },
    {timestamps: true},
)

//'Project' creates the name of the collection in the db.
module.exports = mongoose.model('Project', projectSchema)