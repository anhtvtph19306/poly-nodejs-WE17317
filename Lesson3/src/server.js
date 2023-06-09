import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import productRouter from './routers/product.js'
import fileRouter from './routers/file.js'

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express()
// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static file
app.use(express.static("src/public"))

// Router
app.use('/api', productRouter)
app.use('/upload', fileRouter)

// Connect MongoDB
// 1. Cài đặt mongoose
// 2. Connect với MongoDB
// 3. Tạo model
// 4. Query trong controller
mongoose.connect("mongodb://localhost:27017/test")
.then(() => console.log("Connect to db sucessfully"))

app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "views/home.html"), "utf-8")
    res.send(html)
    res.end()
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
})