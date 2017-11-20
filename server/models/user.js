const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
  name: {type: String},

}, {timestamps: true})

mongoose.model('User', UserSchema)