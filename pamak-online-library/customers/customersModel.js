// Load dependencies
const mongoose = require("mongoose");

// Define the Customer Schema
var CustomerSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	}
});

// Create the Customer Model
const Customer = mongoose.model("Customer", CustomerSchema, 'customers');

// Provide the Customer Model to the customer service
module.exports = Customer;

// Connect to MongoDB database
mongoose.connect("mongodb+srv://username!password@eugenecluster-incta.mongodb.net/customers-libraryservice", () => {
    console.log("Connected to MongoDB Cluster - Customers database..");
});
