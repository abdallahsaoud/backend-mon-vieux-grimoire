const express = require('express')

const router = express.Router()

const bookCtrl = require('../controllers/books')

router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBook)
router.get('/bestrating', bookCtrl.getBestrating)
router.post('/', bookCtrl.postNewBook)
router.put('/:id', bookCtrl.modifyBook)
router.delete('/:id', bookCtrl.deleteBook)
router.post('/:id/rating', bookCtrl.ratingBook)

module.exports = router;