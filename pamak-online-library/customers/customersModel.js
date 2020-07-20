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

const mongodbatlas_username = process.env.MONGODBATLAS_USERNAME;
const mongodbatlas_password = process.env.MONGODBATLAS_PASSWORD;

// Connect to MongoDB database
mongoose.connect(`mongodb://${mongodbatlas_username}!${mongodbatlas_password}@eugenecluster-shard-00-00-incta.mongodb.net:27017,eugenecluster-shard-00-01-incta.mongodb.net:27017,eugenecluster-shard-00-02-incta.mongodb.net:27017/customers-libraryservice?ssl=true&replicaSet=eugenecluster-shard-0&authSource=admin`, () => {
    console.log("Connected to MongoDB Cluster - Customers database..");
});
