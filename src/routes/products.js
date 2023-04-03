const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js')
router.post('/addProduct',controller.productController.addProduct)
router.get('/allProducts',controller.productController.getAllProduct)
router.get('/:id',controller.productController.getProductById)
router.put('/:id',controller.productController.updateProductById)
router.delete('/:id',controller.productController.deleteProductById)
module.exports = router;