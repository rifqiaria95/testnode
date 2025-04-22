const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'Laskar Pelangi' },
  { id: 2, title: 'Bumi Manusia' }
];

// GET /books
router.get('/', (req, res) => {
  res.json(books);
});

// GET /books/:id
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Buku nggak ketemu');
  res.json(book);
});

// POST /books
router.post('/', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// DELETE /books/:id
router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

module.exports = router;