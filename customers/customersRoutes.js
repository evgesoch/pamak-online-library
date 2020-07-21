// Load dependencies
const express = require('express');
const router = express.Router();
const CustomersModel = require("./customersModel");

// Get all customers
router.get("/", (req, res, next) => {
    CustomersModel.find().then((customers) => {
        res.status(200).json(
            customers
        )
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Get one customer by id
router.get("/:id", (req, res, next) => {
    CustomersModel.findById(req.params.id).then((customer) => {
        if(customer){
            res.json(customer);
        } else {
            res.sendStatus(404);
        }
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Create a new customer
router.post("/", (req, res, next) => {
    var newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone
    }
    var customer = new CustomersModel(newCustomer);
    customer.save().catch((err) => {
        if (err){
            throw err;
        }
    });
    res.status(201).json({
        status: 201,
        message: "New customer: " + newCustomer.name + " added",
    });
});

// Delete a customer
router.delete("/:id", (req, res, next) => {
    CustomersModel.findByIdAndDelete(req.params.id).then((customer) => {
        res.status(200).json({
            status: 200,
            message: "Customer " + customer.name + " deleted"
        }).catch((err) => {
            if (err){
                throw err;
            }
        })
    })
});

module.exports = router;
