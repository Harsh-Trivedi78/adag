const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: { //service title
            type: String,
            required: true,
        },
        author: { // descrip
            type: String,
            required: true,
        },
        publishYear: { //amount
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
