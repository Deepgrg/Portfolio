const { validationResult } = require('express-validator');
const createError = require('http-errors');
const Message = require('../models/contactModel');

exports.receiveMessage = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw createError(422, 'Validation Failed, Entered data is incorrect');
  }
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const newMessage = new Message(name, email, subject, message);
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
