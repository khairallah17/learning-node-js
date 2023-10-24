const Products = require("../models/Products")

async function getAllProducts (req, res) {

    const products = await Products.find()
    return res.json(products)

}

async function getProductById (req, res) {

    const idP = req.parms.id
    const product = await Products.findById(idP)
    return res.json(product)

}

async function addProduct (req, res) {

    const product = await Products.create(req.body)
    return res.json(product)

}

async function deleteProduct (req, res) {

    const idP = req.parms.id
    const product = await Products.findByIdAndDelete(idP)
    return res.json(product)

}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
}