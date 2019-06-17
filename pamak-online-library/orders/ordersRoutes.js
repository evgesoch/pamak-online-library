// Load dependencies
const express = require('express');
const router = express.Router();
const OrdersModel = require("./ordersModel");
const mongoose = require("mongoose");
const axios = require("axios");

// Get all orders
router.get("/", (req, res, next) => {
    OrdersModel.find().then((orders) => {
        res.status(200).json(
            orders
        )
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Get one order by id (the wrong way)
router.get("/wrong/:id", (req, res, next) => {
    OrdersModel.findById(req.params.id).then((order) => {
        if(order){
            res.json(order);
        } else {
            res.sendStatus(404);
        }
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Get one order by id
router.get("/:id", (req, res, next) => {
    OrdersModel.findById(req.params.id).then((order) => {
        if(order){           
            axios.get("http://localhost:3050/customers/" + order.customerId).then(response => {
                var orderResponse = {
                        _id: order._id,
                        customerName: response.data.name, 
                        bookTitle: "", 
                        orderDate: order.orderDate,
                        deliveryDate: order.deliveryDate,
                        __v : 0
                };
                axios.get("http://localhost:3000/books/" + order.bookId).then(response => {
                    orderResponse.bookTitle = response.data.title
                    res.send(orderResponse)
                })
            }).catch (error => {
                throw error;
            })            
        } else {
            res.sendStatus(404);
        }
    })
});

// Create a new order 
router.post("/", (req, res, next) => {
    var newOrder = {
        customerId: mongoose.Types.ObjectId(req.body.customerId),
        bookId: mongoose.Types.ObjectId(req.body.bookId),
        orderDate: req.body.orderDate,
        deliveryDate: req.body.deliveryDate
    }
    var order = new OrdersModel(newOrder);
    order.save().catch((err) => {
        if (err){
            throw err;
        }
    });
    res.status(201).json({
        status: 201,
        message: {
            orderID: order._id,
            customerID: newOrder.customerId,
            bookID: newOrder.bookId
        } 
    });
});

// Delete an order
router.delete("/:id", (req, res, next) => {
    OrdersModel.findByIdAndDelete(req.params.id).then((order) => {
        res.status(200).json({
            status: 200,
            message: "Order deleted"
        }).catch((err) => {
            if (err){
                throw err;
            }
        })
    })
});

module.exports = router;
