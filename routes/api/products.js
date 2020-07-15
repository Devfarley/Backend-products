var express = require('express');
var router = express.Router();
const {
  readProducts,
  createProduct,
  upsertProduct,
  updateProduct,
  deleteProduct
} = require('../../data/products');

/* GET product listing. */
router.get('/', (req, res, next) => {
  readProducts().then(data => {
    res.send(data);
  });
});

/* POST product creation. */
router.post('/', (req, res, next) => {
  const body = req.body
  createProduct(body).then(data =>{
    res.send(data);
  })
});

/* PUT product update/replace. */
router.put('/:id', (req, res, next) => {
  const body = req.body;
  const id = req.params.id;
  upsertProduct(id, body).then(data =>{
    res.send(data);
  });
});

/* PATCH product update/modify. */
router.patch('/:id', (req, res, next) => {
  const body = req.body;
  const id = req.params.id;
  updateProduct(id, body).then(data =>{
    res.send(data);
  });
});

/* DELETE product listing. */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  deleteProduct(id).then(data => {
    res.send(data);
  });
});

module.exports = router;
