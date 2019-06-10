// Load dependencies
const mongoose = require("mongoose");

// Define the Order Schema
var OrderSchema = mongoose.Schema({
	customerId: {
		type: mongoose.SchemaTypes.ObjectId,
		require: true
	},
	bookId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	orderDate: {
		type: Date,
		required: true
	},
	deliveryDate: {
		type: Date,
		required: true
	}
});

// Create the Order Model
const Order = mongoose.model("Order", OrderSchema, 'orders');

// Provide the Order Model to the order service
module.exports = Order;

// Connect to MongoDB database
mongoose.connect("mongodb+srv://username!password@eugenecluster-incta.mongodb.net/orders-libraryservice", () => {
    console.log("Connected to MongoDB Cluster - Orders database..");
});
