import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser";

import userRouter from "./routers/user";
import productRouter from "./routers/product";
import invoiceRouter from "./routers/invoice";

const app = express()
const port = 8080

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Router
app.use('/auth', userRouter)
app.use('/product', productRouter)
app.use('/api', invoiceRouter)


// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/WE17317")
    .then(() => console.log("connected to dbmongo"))


app.listen(port, () => {
    console.log("Server is running on " + port);
})