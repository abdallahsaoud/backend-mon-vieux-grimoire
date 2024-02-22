const book = require('../models/book')

exports.getAllBook = (req, res, next) => {
    book.find()
    .then(books => res.status(200).json(books))
    .catch(error => res.status(400).json({error}))
};

exports.getOneBook = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(book => res.status(200).json(book))
      .catch(error => res.status(404).json({ error }));
  };

exports.getBestrating = (req, res, next) => {

}

exports.postNewBook = (req, res, next) => {

}

exports.modifyBook = (req, res, next) => {

}

exports.deleteBook = (req, res, next) => {

}

exports.ratingBook = (req, res, next) => {

}