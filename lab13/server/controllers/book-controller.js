const Book = require('../models/books');

exports.getAllBooks = (req, res, next) => { 
    res.json(Book.getAllBooks());
}


exports.getBookById = (req, res) => {
    res.json(Book.getBookById(req.params.id));
}


exports.saveBook = (req, res) => {
    const {title, ISBN, publishedDate,author} = req.body;
    new Book(null, title,  ISBN, publishedDate,author).save();
    res.status(201).end();
}

exports.updateBook = (req, res) => {
    const {title, ISBN, publishedDate,author} = req.body;
    const book = new Book(null, title,  ISBN, publishedDate,author);
    book.id = req.params.id;
    book.updateById(req.params.id);
    res.status(200).json(book);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}