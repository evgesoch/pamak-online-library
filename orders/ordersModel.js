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

const mongodbatlas_username = process.env.MONGODBATLAS_USERNAME;
const mongodbatlas_password = process.env.MONGODBATLAS_PASSWORD;

// Connect to MongoDB database
mongoose.connect(`mongodb://${mongodbatlas_username}!${mongodbatlas_password}@eugenecluster-shard-00-00-incta.mongodb.net:27017,eugenecluster-shard-00-01-incta.mongodb.net:27017,eugenecluster-shard-00-02-incta.mongodb.net:27017/orders-libraryservice?ssl=true&replicaSet=eugenecluster-shard-0&authSource=admin`, () => {
    console.log("Connected to MongoDB Cluster - Orders database..");
});
