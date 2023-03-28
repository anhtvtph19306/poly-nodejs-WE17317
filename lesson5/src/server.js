import express from "express"
import mongoose from "mongoose"
import productRouter from "./routers/product"
import bodyParser from "body-parser"
import deviceRouter from "./routers/device"

const app = express()
const port = 8080


//  middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect("mongodb://127.0.0.1:27017/WE17317")
.then(()=> console.log("Kết nối db thành công"))

// router
app.use("/api",productRouter)
app.use("/dev",deviceRouter)

app.listen(port, ()=>{
    console.log(`Kết nối Server thành công ${port}`);
})