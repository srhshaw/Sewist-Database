const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const materialSchema = new Schema(
    {
        name: {type: String, required: true},
        woven: {type: Boolean, required: true},
        lengthInYds: {type: Number},
        widthInInches: {type: Number}
    },
    {timestamps: true},
)

//'Material' creates the name of the collection in the db.
module.exports = mongoose.model('Material', materialSchema)