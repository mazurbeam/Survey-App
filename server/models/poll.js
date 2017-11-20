const mongoose = require('mongoose')
const Schema = mongoose.Schema



var Option = new Schema({
    option: {type: String},
    votes: {type: Number}
})

var PollSchema = new Schema({
    question: {type: String},
    option1: Option,
    option2: Option,
    option3: Option,
    option4: Option,

}, {timestamps: true})

mongoose.model('Poll', PollSchema)

