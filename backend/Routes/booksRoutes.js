const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require('../Models/bookmodel');

// Route for saving a new book:
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;
        
        if (!title || !author || !publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        
        const newBook = { title, author, publishYear };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.error(error.message); // Improved logging
        response.status(500).send({ message: error.message });
    }
});

// Route for getting all books:
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.error(error.message); // Improved logging
        response.status(500).send({ message: error.message });
    }
});

// Route for getting one book by ID:
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        
        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ message: 'Invalid ID format' });
        }

        const book = await Book.findById(id);

        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.error(error.message); // Improved logging
        response.status(500).send({ message: error.message });
    }
});

// Route for updating a book:
router.put('/:id', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ message: 'Invalid ID format' });
        }

        const result = await Book.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully', book: result });
    } catch (error) {
        console.error(error.message); // Improved logging
        response.status(500).send({ message: error.message });
    }
});

// Route for deleting a book:
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ message: 'Invalid ID format' });
        }

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message); // Improved logging
        response.status(500).send({ message: error.message });
    }
});

module.exports = router;
