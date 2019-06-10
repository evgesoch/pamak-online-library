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

// Connect to MongoDB database
mongoose.connect("mongodb+srv://username!password@eugenecluster-incta.mongodb.net/books-libraryservice", () => {
    console.log("Connected to MongoDB Cluster - Books database..");
});
