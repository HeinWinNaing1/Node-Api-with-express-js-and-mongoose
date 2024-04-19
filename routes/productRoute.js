const express = require('express')
const router = express.Router();
const Product = require('../models/productModel')
const {getAllProducts,createProduct,getProductById,getProductByName,updateProduct,deleteProduct} = require('../controllers/productController')

//CREAET PRODUCT
router.post('/',createProduct)

//GET ALL PRODUCT
router.get('/',getAllProducts)

//GET PRODUCT BY ID
router.get('/:id',getProductById)

//GET PRODUCT BY NAME
router.get('/name/:name',getProductByName)

//UPDATE PRODUCT
router.put('/:id',updateProduct)

//DELETE PRODUCT
router.delete('/:id',deleteProduct)

module.exports = router;
