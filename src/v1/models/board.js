const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const boardSchema = new Schema({
  icon: {
    type: String,
    default: '📃'
  },
  title: {
    type: String,
    default: 'Untitled'
  },
  description: {
    type: String,
    default: `Add description here`
  },
  position: {
    type: Number
  }
}, schemaOptions)

module.exports = mongoose.model('Board', boardSchema)