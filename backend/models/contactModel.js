const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  descriptionMessage: { type: String },
});

module.exports = mongoose.model('Message', messageSchema);
