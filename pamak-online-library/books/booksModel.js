// Load dependencies
const mongoose = require("mongoose");

// Define the Book Schema
var BookSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	author: {
		type: String,
		required: true
	},
	numberPages: {
		type: Number,
		required: true
	},
	publisher: {
		type: String,
		required: true
	}
});

// Create the Book Model
const Book = mongoose.model("Book", BookSchema, 'books');

// Provide the Book Model to the book service
module.exports = Book;

const mongodbatlas_username = process.env.MONGODBATLAS_USERNAME;
const mongodbatlas_password = process.env.MONGODBATLAS_PASSWORD;

// Connect to MongoDB database
mongoose.connect(`mongodb://${mongodbatlas_username}!${mongodbatlas_password}@eugenecluster-shard-00-00-incta.mongodb.net:27017,eugenecluster-shard-00-01-incta.mongodb.net:27017,eugenecluster-shard-00-02-incta.mongodb.net:27017/books-libraryservice?ssl=true&replicaSet=eugenecluster-shard-0&authSource=admin`, () => {
    console.log("Connected to MongoDB Cluster - Books database..");
});
