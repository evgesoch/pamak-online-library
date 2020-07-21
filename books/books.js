// Load dependencies
const express = require("express");
const app =  express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
// Load Book Routes
const booksRoutes = require("./booksRoutes");

// Incoming request data arrive in JSON format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Log requests before handling them
app.use(morgan('dev'));

// Routes which are handled by the handlers
app.use('/books', booksRoutes);

// Books service listens
const port = 3000; 
app.listen(port, () => {
    console.log("\n\nBooks service started..");
});
