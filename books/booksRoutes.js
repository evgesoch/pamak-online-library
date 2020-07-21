// Load dependencies
const express = require('express');
const router = express.Router();
const BooksModel = require("./booksModel");

// Get all books
router.get("/", (req, res, next) => {
    BooksModel.find().then((books) => {
        res.status(200).json(
            books
        )
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Get one book by id
router.get("/:id", (req, res, next) => {
    BooksModel.findById(req.params.id).then((book) => {
        if(book){
            res.json(book);
        } else {
            res.sendStatus(404);
        }
    }).catch((err) => {
        if (err){
            throw err;
        }
    })
});

// Create a new book
router.post("/", (req, res, next) => {
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }
    var book = new BooksModel(newBook);
    book.save().catch((err) => {
        if (err){
            throw err;
        }
    });
    res.status(201).json({
        status: 201,
        message: "New book: " + newBook.title + " added",
    });
});

// Delete a book
router.delete("/:id", (req, res, next) => {
    BooksModel.findByIdAndDelete(req.params.id).then((book) => {
        res.status(200).json({
            status: 200,
            message: "Book " + book.title + " deleted"
        }).catch((err) => {
            if (err){
                throw err;
            }
        })
    })
});

module.exports = router;
