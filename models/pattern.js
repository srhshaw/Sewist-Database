const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const patternSchema = new Schema(
    {
        publisher: {type: String, required: true},
        name_no: {type: String, required: true},
        description: {type: String, required:true},
        woven_required: {type: Boolean, required: true},
    },
    {timestamps: true},
)

//'Pattern' creates the name of the collection in the db.
module.exports = mongoose.model('Pattern', patternSchema)