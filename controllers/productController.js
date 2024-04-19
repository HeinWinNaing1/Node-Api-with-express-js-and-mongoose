const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const createProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        console.log("SUCCESS PRODUCT CREATE")
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getAllProducts = async(req,res)=>{
    try {

        const product = await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getProductById = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        if(!product){
            res.status(400).json({message:`product ID :${id} is not found !.`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getProductByName = async(req,res)=>{
    try {
        const name = req.params.name;
        const product = await Product.findOne({ name: name }).exec();//find by name
        if(!product){
            res.status(400).json({message:`product ID :${name} is not found !.`})
        }
        res.status(200).json(product)
        console.log("FIND BY ID API")
        
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(400).json({message:`Can not find product ID : ${id}`})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
        
    } catch (error) {
        res.status(500).json({message:error.message})

    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(400).json({message:`Can not find product ID : ${id}`})
        }
        res.status(200).json({message:`Successfully deleted product with ID : ${id}`})
        
    } catch (error) {
        res.status(500).json({message:error.message})

    }
}

module.exports = {
    createProduct,
    getAllProducts,getProductById,getProductByName,updateProduct,deleteProduct
}