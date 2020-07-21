// Load dependencies
const express = require("express");
const app =  express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
// Load Customer Routes
const customersRoutes = require("./customersRoutes");

// Incoming request data arrive in JSON format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Log requests before handling them
app.use(morgan('dev'));

// Routes which are handled by the handlers
app.use('/customers', customersRoutes);

// Customers service listens
const port = 3050;
app.listen(port, () => {
    console.log("\n\nCustomers service started..");
});
