const express = require('express');
const bookcontroller = require('../controllers/book-controller');
const router = express.Router();


router.get('/', bookcontroller.getAllBooks);
router.get('/:id', bookcontroller.getBookById);
router.post('/', bookcontroller.saveBook);
router.put('/:id', bookcontroller.updateBook);
router.delete('/:id', bookcontroller.deleteById);



module.exports = router;