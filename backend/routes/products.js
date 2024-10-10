const express = require('express');
const cloudinary = require("../utils/cloudinary")
const router = express.Router();
const Product = require('../models/product');
const ProductController = require('../controllers/productController')


// GET /api/products - get all product
router.get('/', ProductController.fetchProducts);

// GET /api/products/:id - get product id
router.get('/:id',ProductController.fetchProduct);

// POST /api/products - create new product
router.post('/', ProductController.upload.single('image'),ProductController.newProduct);

// PUT /api/products/:id - update product
router.put('/:id',  ProductController.upload.single('image'),ProductController.updateProduct);

// DELETE /api/products/:id - delete product
router.delete('/:id',  ProductController.deleteProduct);

// Middleware for get product by id



module.exports = router;
