const express = require("express")
const router = express.Router()
const ProductsController  = require("../controllers/products.controller")

router.route("/products")
        .get(ProductsController.getAllProducts)
        .post(ProductsController.addProduct)

router.route("/products/:id")
        .get(ProductsController.getProductById)
        .delete(ProductsController.deleteProduct)

module.exports = router