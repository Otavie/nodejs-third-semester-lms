const express = require('express');
const bookModel = require('../models/bookModels');
const bookValidator = require('../validators/book.validator');
const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
    bookModel.find()
        .then(books => {
            res.send(books)
        })
        .catch(error => {
            console.log("No Book Found: ", error);
            res.send(error);
        })
})

bookRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    bookModel.findById(id)
        .then(book => {
            if (!book) {
                console.log('Book Not Found!');
                return res.status(404).send("Book Not Found!");
            }
            // Send the Found Book as a Response
            res.status(200).send(book);
        })
        .catch(error => {
            console.log('Error Finding Book:', error)
            res.status(404).send(error);
        })
})

bookRouter.post('/', bookValidator, (req, res) => {
    const book = req.body;
    book.lastUpdatedAt = new Date();

    bookModel.create(book)
        .then(book => {
            res.status(201).send(book);
        })
        .catch(error => {
            console.log('Book Cannot be Added: ', error);
            res.status(500).send(error);
        })
})

bookRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body;

    book.lastUpdatedAt = new Date();

    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then(newBook => {
            res.status(200).send(newBook);
        })
        .catch(error => {
            console.log('Cannot Edit Book: ', error);
            res.status(500).send(error);
        })
})

bookRouter.delete('/:id', (req, res) => {
    const id = req.params.id;

    bookModel.findByIdAndDelete(id)
        .then(book => {
            res.status(200).send(book)
        })
        .catch(error => {
            console.log('Cannot Delete Book: ', error);
            res.status(500).send(error);
        })
})

module.exports = bookRouter;