const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productControllers');

router.get('/products', getAllProducts);

module.exports = router;