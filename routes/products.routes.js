const router = require("express").Router()
const ProductsController  = require("../controllers/products.controller")

router.all("/products")
        .get(ProductsController.getAllProducts)
        .post(ProductsController.addProduct)

router.all("/products/:id")
        .get(ProductsController.getProductById)
        .delete(ProductsController.deleteProduct)

module.exports = router