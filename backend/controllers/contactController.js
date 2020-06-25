// core modules and third party modules
const { validationResult } = require('express-validator');
const createError = require('http-errors');

// project moduels
const Message = require('../models/contactModel');

// to receive message and post it to the database
exports.receiveMessage = (req, res, next) => {
  // checking if errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw createError(422, 'Validation Failed, Invalid Input');
  }
  // after validation
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const descriptionMessage = req.body.message;

  // creating the message for the database
  const newMessage = new Message({
    name: name,
    email: email,
    subject: subject,
    descriptionMessage: descriptionMessage,
  });
  newMessage
    .save()
    .then((result) => {
      res.status(200).json({
        message: 'Messaged Succesfully',
        result: result,
      });
    })
    .catch((err) => {
      throw createError(500, 'Server Error');
    });
};
