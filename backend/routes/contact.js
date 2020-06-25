// core modules and third party modules
const express = require('express');
const { body } = require('express-validator');

// project routes
const contactController = require('../controllers/contactController');

// setting up a router
const router = express.Router();

// to send the message
// [name,email,subject,message]
// api endpoint: <host>/api/contact/message/
router.post(
  '/message',
  [
    // validating the input
    body('name').trim().isLength({ min: 3 }).notEmpty(),
    body('email').trim().isEmail(),
    body('subject').trim().notEmpty(),
    body('message').trim(),
  ],
  contactController.receiveMessage
);

module.exports = router;
