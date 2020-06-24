// core modules and third party modules
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// project modules
const contactRoute = require('./routes/contact');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// project routes
//contact route
app.use('/api/contact', contactRoute);

// 404 route
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status || 500,
    },
  });
});

// server on port 8000
let port = process.env.PORT || 8000;

mongoose
  .connect(
    `mongodb+srv://root:${process.env.DATABASE_PASSWORD}@cluster0-exmb8.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Backend on port :${port}`);
    });
  })
  .catch((err) => {
    console.log(err, 'Cannot connect to the database');
  });
