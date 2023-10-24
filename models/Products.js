const mongoose = require("mongoose")

const Products = new mongoose.Schema({
    
    name : {
        type: String,
    },

    price : {
        type: Number
    }

})

module.export = mongoose.model("produts", Products)