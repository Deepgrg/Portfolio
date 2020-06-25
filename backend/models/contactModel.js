// core modules and third party modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for the mongodb when creating message
const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  subject: { type: String, required: true },
  descriptionMessage: { type: String },
});

module.exports = mongoose.model('Message', messageSchema);
