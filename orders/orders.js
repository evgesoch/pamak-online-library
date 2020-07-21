// Load dependencies
const express = require("express");
const app =  express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
// Load Order Routes
const ordersRoutes = require("./ordersRoutes");

// Incoming request data arrive in JSON format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Log requests before handling them
app.use(morgan('dev'));

// Routes which are handled by the handlers
app.use('/orders', ordersRoutes);

// Orders Service listens
const port = 3100;
app.listen(port, () => {
    console.log("\n\nOrders service started..");
});
