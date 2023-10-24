const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productsRoute = require("./routes/products.routes")

const port = 4000


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", productsRoute)

mongoose.connect("mongodb+srv://tp-bousselham:7VJpLC6ChwchUqIo@cluster0.hoebmxd.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected successfully")
    app.listen(port, () => console.log(`app listening on port ${port}`))
}).catch((error) => {
    console.log("Error: ", error.message)
})
